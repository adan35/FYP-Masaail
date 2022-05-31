let mongoose = require("mongoose");
let uniqueValidator = require("mongoose-unique-validator");
let crypto = require("crypto");
let jwt = require("jsonwebtoken");
let secret = require("../config").secret;
const mongoosePaginate = require("mongoose-paginate-v2");
const otpGenerator = require("otp-generator");
const faker = require("faker");
const config = require("../config");
let UserSchema = new mongoose.Schema(
	{
		
		otp: { type: String, default: null },
		otpExpires: { type: Date, default: null },
		
		hash: { type: String, default: null },
		salt: String,
		
		role: {
			type: Number, // 1-admin 2-agent 3-user
		},
	},
	{ timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });
UserSchema.plugin(mongoosePaginate);

UserSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
	return this.hash === hash;
};

UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString("hex");
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};
UserSchema.methods.generatePasswordRestToken = function () {
	this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
};
UserSchema.methods.setOTP = function () {
	this.otp = faker.random.number({ max: 9999, min: 999 });
	this.otpExpires = Date.now() + 3600000; // 1 hour
};


UserSchema.methods.generateJWT = function () {
	let today = new Date();
	let exp = new Date(today);
	exp.setDate(today.getDate() + 60);

	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			exp: parseInt(exp.getTime() / 1000),
		},
		secret
	);
};

var autoPopulate = function (next) {
	next();
};

UserSchema.pre("findOne", autoPopulate);
UserSchema.pre("find", autoPopulate);

UserSchema.methods.toAuthJSON = function () {
	return {
		token: this.generateJWT(),
	};
};

UserSchema.methods.toJSON = function () {
	return {
		
	};
};

module.exports = mongoose.model("User", UserSchema);
