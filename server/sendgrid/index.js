const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mamenkooo@gmail.com",
    pass: "npqcfuzejlilkcpv",
  },
});

const mailOptions = {
  from: "mamenkooo@gmail.com",
  to: "mamenkooo@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
