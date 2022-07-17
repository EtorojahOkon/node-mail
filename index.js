//imports
const express = require('express')
require('dotenv').config()
const nodemailer = require('nodemailer')

const app = express()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

let mailOptions = {
    from: 'etorojahokon100@gmail.com',
    to: 'etorojahokon100@gmail.com',
    subject: 'Zuri Nodemailer Test run',
    text: 'Senior man, I de greet'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is up and running on port ${port}`)
})