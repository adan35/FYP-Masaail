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

router.get('/get/all', auth.required, auth.user,(req, res, next) => {
  Post.find({}).sort({ createdAt: -1 }).exec(
    (err, posts) => {
      if (err) return next(err);
      next(new OkResponse(posts.map(post => post.toJSONFor(req.user))));
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

router.post('/support/:id', auth.required, auth.user, (req, res, next) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    if (!post) return next(new BadRequestResponse("Post not found"));

    let alreadySupported = post.supportBy.map((user, index) => {
      if(user._id.toString() === req.user._id.toString()){
        return index;
      }
    });

    console.log("===============",alreadySupported);

    if(alreadySupported[0]){
      post.supportBy.splice(alreadySupported[0], 1);
    }
    else{
      post.supportBy.push(req.user._id);
    }

    post.save((err, post) => {
      if (err) return next(err);
      next(new OkResponse(post));
    })

  })
})

router.get('/hot/topics', auth.required, auth.user, (req, res, next) => {
  Post.find({}, (err, posts) => {
    if (err) return next(err);
    posts.sort((a, b) => {return b.supportBy.length - a.supportBy.length;});
    let topPosts = posts.slice(0, 3);
    next(new OkResponse(topPosts));
  });
});

module.exports = router;
