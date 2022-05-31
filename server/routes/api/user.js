let mongoose = require("mongoose");
let router = require("express").Router();
let passport = require("passport");
let User = mongoose.model("User");
let auth = require("../auth");

module.exports = router;
