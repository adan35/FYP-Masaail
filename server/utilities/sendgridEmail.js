const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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",
);
let {
  emailVerifyTemplate,
  forgotPasswordTemplate,
} = require("./emailTemplate");

const sendEmailOtpMail = (user) => {
  const msg = {
    to: user.email, // Change to your recipient
    from: "noreply@easyoz.com.au", // Change to your verified sender
    subject: "Email Verification",
    text: "Email Verification",
    html: emailVerifyTemplate(user),
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendForgotMail = (user) => {
  console.log("uSER", user);
  const msg = {
    to: user.email, // Change to your recipient
    from: "noreply@easyoz.com.au", // Change to your verified sender
    subject: "Forgot Password",
    text: "Forgot Password",
    html: forgotPasswordTemplate(user),
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmailOtpMail, sendForgotMail };
