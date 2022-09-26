const nodeMailer = require("nodemailer");
require("dotenv/config");

module.exports = {
  sendMail: (to, subject, htmlContent) => {
    const transport = nodeMailer.createTransport({
      //   host: process.env.MAIL_HOST,
      //   port: process.env.MAIL_PORT,
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME || "bac0122000@gmail.com",
        pass: process.env.MAIL_PASSWORD || "hpftroebeyhkwmhk",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const options = {
      from: process.env.MAIL_FROM_ADDRESS || "bac0122000@gmail.com",
      to: to,
      subject: subject,
      html: htmlContent,
    };

    return transport.sendMail(options);
  },
};
