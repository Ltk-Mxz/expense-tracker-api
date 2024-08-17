const nodemailer = require("nodemailer");

const emailManager = async (to, text, html, subject) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "65776cf9ae57a2",
      pass: "f368ad67f298f6",
    },
  });

  await transport.sendMail({
    to: to,
    from: "bro@code.fr",
    text: text,
    html: html,
    subject: subject,
  });
};

module.exports = emailManager;
