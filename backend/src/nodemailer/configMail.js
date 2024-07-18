import nodemailer from "nodemailer";
const { EMAIL, PASSWORD_MAIL, HOST_MAIL, PORT_MAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: HOST_MAIL,
  port: PORT_MAIL,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD_MAIL,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
