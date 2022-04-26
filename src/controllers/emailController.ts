import { Request, Response } from "express";
import mailer from "nodemailer"

export const contato = async (req: Request, res: Response) => {

   // Passo 1: Configurar o transporter

   let transport = mailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "adacb630feb559",
      pass: "7540acc07f43aa"
    }
  });

   // Passo 2: Configurar a mensagem

   let messagem = {
       from: "Aguair <aguiar@mailtrap.io>",
       to: "aguiar1414@mailtrap.io",
       subject: "Envio de e-mail com mailtrap",
       html: "Ola, <strong>Aguiar</strong> esse foi um teste para envio de e-mails",
       text: "Ola, Aguiar esse foi um teste para envio de e-mails"
   }

   // Passo 3: Enviar a mensagem
   const info = await transport.sendMail(messagem);

   console.log(info);

   res.json({sucess: true});
}