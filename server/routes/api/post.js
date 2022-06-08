let mongoose = require("mongoose");
let router = require("express").Router();
let Post = mongoose.model("Post");
let auth = require("../auth");
let {OkResponse, BadRequestResponse} = require("express-http-response");

router.post("/new", auth.required, auth.user, (req, res, next) => {
  try{
    let post = new Post(req.body.post);
  post.by = req.user._id;
  post.save((err, post) => {
    if (err) return next(err);
    next(new OkResponse(post));
  })
  }
  catch(err){
    console.log(err);
    next(new BadRequestResponse(err));
  }
});

router.get('/get/all', (req, res, next) => {
  Post.find({}).sort({ createdAt: -1 }).exec(
    (err, posts) => {
      if (err) return next(err);
      next(new OkResponse(posts));
    }
  );
})

router.get('/get/my', auth.required, auth.user, (req, res, next) => {
  try{
    Post.find({by: req.user._id}).sort({ createdAt: -1 }).exec(
      (err, posts) => {
        if (err) return next(err);
        next(new OkResponse(posts));
      }
    );
  }
  catch(err){
    console.log(err);
    next(new BadRequestResponse(err));
  }
})

module.exports = router;
