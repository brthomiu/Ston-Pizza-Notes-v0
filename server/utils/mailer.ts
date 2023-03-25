import nodemailer, { SendMailOptions } from "nodemailer";
import log from "./logger";
import _default from "../config/default";

// async function createTestCreds() {
//   const creds = await nodemailer.createTestAccount();
//   console.log({ creds });
// }

// createTestCreds();

// Type for SMTP request object
type smtp_type = {
  user: string;
  pass: string;
  host: string;
  port: number;
  secure: boolean;
};

// SMTP request object
const smtp: smtp_type = {
  user: _default.SMTP_USER,
  pass: _default.SMTP_PASS,
  host: _default.SMTP_HOST,
  port: _default.SMTP_PORT,
  secure: _default.SMTP_SECURE,
};

// Nodemailer transporter to send email using credentials from smtp object
const transporter = nodemailer.createTransport({
  ...smtp,
  auth: { user: smtp.user, pass: smtp.pass },
});

async function sendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      log.error(err, "Error sending email");
      return;
    }
    log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

export default sendEmail;
