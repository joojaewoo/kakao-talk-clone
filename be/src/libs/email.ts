import * as nodemailer from 'nodemailer';

export default nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GOOGLE_ID,
    pass: process.env.GOOGLE_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
