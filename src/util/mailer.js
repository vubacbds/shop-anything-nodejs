const nodeMailer = require("nodemailer");
require("dotenv/config");

module.exports = {
  sendMail: (to, subject, htmlContent) => {
    const transport = nodeMailer.createTransport({
      //   host: process.env.MAIL_HOST,
      //   port: process.env.MAIL_PORT,
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const options = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    return transport.sendMail(options);
  },
};
