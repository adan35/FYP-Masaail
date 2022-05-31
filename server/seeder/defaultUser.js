const User = require("../models/User");

async function seedUser() {
	// Seed Admin
	{
		let newUser = new User();
		newUser.role = 1;
		// newUser.email = "admin@easyoz.com.au";
		newUser.email = "admin@gmail.com";
		newUser.userName = "admin";
		newUser.firstName = "admin";
		newUser.lastName = "admin";
		// newUser.setPassword("V3J68T423sH8HkB");
		newUser.setPassword("1234");
		newUser.isEmailVerified = true;
		newUser.isPhoneVerified = true;
		newUser.isProfileCompleted = true;
		newUser.status = 1;

		await newUser.save();
	}
	//agent
	{
		let newUser = new User();
		newUser.role = 2;
		// newUser.email = "admin@easyoz.com.au";
		newUser.email = "agent@gmail.com";
		newUser.userName = "agent";
		newUser.firstName = "agent";
		newUser.lastName = "agent";
		// newUser.setPassword("V3J68T423sH8HkB");
		newUser.setPassword("1234");
		newUser.isEmailVerified = true;
		newUser.isPhoneVerified = true;
		newUser.isProfileCompleted = true;
		newUser.status = 1;

		await newUser.save();
	}
	//user
	{
		let newUser = new User();
		newUser.role = 3;
		// newUser.email = "admin@easyoz.com.au";
		newUser.email = "user@gmail.com";
		newUser.userName = "user";
		newUser.firstName = "user";
		newUser.lastName = "user";
		// newUser.setPassword("V3J68T423sH8HkB");
		newUser.setPassword("1234");
		newUser.isEmailVerified = true;
		newUser.isPhoneVerified = true;
		newUser.isProfileCompleted = true;
		newUser.status = 1;

		await newUser.save();
	}
	console.log("Default Users Seeded");
}

module.exports = seedUser;
