const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  console.log(JSON.stringify(req.body.order));
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: process.env.GMAIL_USERNAME,
    subject: "Замовлення",
    text: "Замовлення",
    html: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate></style>
      </head>
      <body>
      <p>${req.body.data.firstName}</p>
      <p>${req.body.data.lastName}</p>
      <p>${req.body.data.number}</p>
      <p>${req.body.data.warehouse}</p>
      <p>${req.body.data.settlement}</p>
      ${JSON.stringify(req.body.order, null, 2)}
      </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send("received");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
