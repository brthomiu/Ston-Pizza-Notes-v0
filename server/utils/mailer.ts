import dotenv from "dotenv";
import nodemailer, { SendMailOptions } from "nodemailer";
import log from "./logger";

dotenv.config();

// async function createTestCreds() {
//   const creds = await nodemailer.createTestAccount();
//   console.log({ creds });
// }

// createTestCreds();

// Generic class for SMTP mailer objects
// Checks the type of env variables and parses them as needed
// Now with ternary operators
class smtp_object<T, U, V> {
  user: string;
  pass: string;
  host: string;
  port: number;
  secure: boolean;

  constructor(user: T, pass: T, host: T, port: U, secure: V) {
    typeof user == "string"
      ? (this.user = user)
      : console.log("SMTP mailer user property returned wrong type!");
    typeof pass == "string"
      ? (this.pass = pass)
      : console.log("SMTP mailer pass property returned wrong type!");
    typeof host == "string"
      ? (this.host = host)
      : console.log("SMTP mailer host property returned wrong type!");
    typeof port == "string"
      ? (this.port = Number(port))
      : console.log("SMTP mailer port property returned wrong type!");
    typeof secure == "string"
      ? secure.toLowerCase() == "true"
        ? (this.secure = true)
        : (this.secure = false)
      : console.log("SMTP mailer secure property returned wrong type!");
  }
}

// Passing env variables to the smtp_object class constructor
const smtp = new smtp_object(
  process.env.SMTP_USER,
  process.env.SMTP_PASS,
  process.env.SMTP_HOST,
  process.env.SMTP_PORT,
  process.env.SMTP_SECURE
);

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
