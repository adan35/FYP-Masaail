let mongoose = require("mongoose");
let router = require("express").Router();
let passport = require("passport");
let User = mongoose.model("User");
let auth = require("../auth");
let {OkResponse, BadRequestResponse} = require("express-http-response");
let {sendEmailOtpMail} = require('../../utilities/sendgridEmail');

router.post('/signup', (req, res, next) => {
  let user = new User(req.body.user);
  user.setPassword(req.body.user.password);
  user.save((err, user)=>{
    if(err){
      return next(new BadRequestResponse(err));
    }
    res.json(new OkResponse("User created"));
  });
})


router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    function (err, user, info) {
      console.log(err, user, info )
      if (err || !user) {
       return next(new BadRequestResponse(err));
       
      }
      if (user) {
        next (new OkResponse(user.toAuthJSON()));
      }
    },
  )(req, res, next);
})

router.put('/profile', auth.required, auth.user, (req, res, next) => {
  req.user.fullName = req.body.user.fullName || req.user.fullName;
  req.user.state = req.body.user.state || req.user.state;
  req.user.city = req.body.user.city || req.user.city;
  req.user.postalCode = req.body.user.postalCode || req.user.postalCode;

  req.user.save((err, user) => {
    if (err) {
      return next(new BadRequestResponse(err));
    }
    return next(new OkResponse(user));
  })
})

router.post('/send/otp', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(err){
      return next(new BadRequestResponse(err));
    }
    if(!user){
      return next(new BadRequestResponse("User not found"));
    }
    user.setOTP();
    sendEmailOtpMail(user);
    user.save((err, user) => {
      if(err){
        return next(new BadRequestResponse(err));
      }
      return next(new OkResponse("OTP sent"));
    })
  });
})

router.post('/verify/otp', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(err){
      return next(new BadRequestResponse(err));
    }
    if(!user){
      return next(new BadRequestResponse("User not found"));
    }
    if(user.otp !== req.body.otp){
      return next(new BadRequestResponse("OTP not matched"));
    }
    if(user.otpExpires < Date.now()){
      return next(new BadRequestResponse("OTP expired"));
    }
    user.otp = null;
    user.otpExpires = null;
    user.save((err, user) => {
      if(err){
        return next(new BadRequestResponse(err));
      }
      return next(new OkResponse("OTP verified"));
    })
  });
});

router.post('/change/password', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(err){
      return next(new BadRequestResponse(err));
    }
    if(!user){
      return next(new BadRequestResponse("User not found"));
    }
    user.setPassword(req.body.password);
    user.save((err, user) => {
      if(err){
        return next(new BadRequestResponse(err));
      }
      return next(new OkResponse("Password changed"));
    })
  });
})

router.get('/context', auth.required, auth.user, (req, res, next) => {
  return next(new OkResponse(req.user));
})

module.exports = router;
