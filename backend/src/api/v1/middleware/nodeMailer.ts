const nodemailer = require("nodemailer");
import { EmailFormat } from "../../../models/nodeMailerModel";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:process.env.EMAIL,
    pass:process.env.EMAIL_PASS
  },
});
export async function sendEmail(emailOptions:EmailFormat) {
  return transporter.sendMail({
    from: process.env.OUTLOOK_EMAIL,
    ...emailOptions,
  });
};
export default sendEmail;