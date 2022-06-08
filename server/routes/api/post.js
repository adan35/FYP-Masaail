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

module.exports = router;
