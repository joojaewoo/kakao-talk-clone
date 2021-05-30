import * as nodemailer from 'nodemailer';

export default (() => {
  let mailer: nodemailer.Transporter<nodemailer.SentMessageInfo>;
  return () => {
    if (!mailer) {
      mailer = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GOOGLE_ID,
          pass: process.env.GOOGLE_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
    }
    return mailer;
  };
})();
