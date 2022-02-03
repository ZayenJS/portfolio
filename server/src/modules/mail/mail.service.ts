import * as path from 'path';
import * as fs from 'fs/promises';

import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
import { MailStatus, SendMailParams, SendMailResponse } from './DTO/SendMail';

@Injectable()
export class MailService {
  public async sendMail(data: SendMailParams): Promise<SendMailResponse> {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${data.fullname} <${data.email}>`,
      to: 'admin@david-nogueira.dev',
      subject: data.subject,
      text: data.message,
    };

    try {
      await transporter.sendMail(mailOptions);

      return {
        status: MailStatus.SENT,
        message: 'Email envoyé avec succès !',
      };
    } catch (error) {
      // day with preceding zero if day is single digit
      const day =
        new Date().getDate() < 10
          ? `0${new Date().getDate()}`
          : new Date().getDate();
      // month with preceding zero if month is single digit
      const month =
        new Date().getMonth() < 9
          ? `0${new Date().getMonth() + 1}`
          : new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const date = `${day}-${month}-${year}`;
      const time = new Date().toLocaleTimeString();
      const dateTime = `${date} ${time}`;

      // Log error to app_error_log file
      fs.writeFile(
        path.join(process.cwd(), 'app_error_log.log'),
        `${dateTime} - MAIL ERROR - ${error.message}\n`,
        { flag: 'a' },
      );

      return {
        status: MailStatus.ERROR,
        message:
          "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard.",
        errors: [
          {
            message: error.message,
          },
        ],
      };
    }
  }
}
