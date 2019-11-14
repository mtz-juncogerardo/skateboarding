const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

let port = process.env.PORT || 3000;
const app = express();
//View engine config

//Body parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/skateboarding'));

//static folder

//require routes
app.get('/*',(req,res) =>{
    res.sendFile(path.join(__dirname));
});

const nodemailer = require('nodemailer');

  app.post('/api/send', (req, res) => {
    const output =
      `
    <p>Tienes una petición de contacto pendiente<p>
    <h3>Detalles de Contacto<h3>
    <ul>
        <li>Nombre: ${req.body.nombre}<li>
        <li>Apellidos: ${req.body.apellido}<li>
        <li>Correo: ${req.body.email}<li>
        <li>Telefono: ${req.body.telefono}<li>
        <li>Mensaje: ${req.body.mensaje}<li>
    `;

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'apiKey', // generated ethereal user
          pass: 'SG.07SozEgbQhWqDeBfekOHKw.ufzzeZsr7KryHtEbyriIlDhDhuwn-Imoy0SWfbSbrug' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Solicitud de Contacto" <dchiripa@skateboarding.com>', // sender address
        to: 'mtz.juncogerardo@gmail.com', // list of receivers
        subject: "Mensaje desde página Dchiripa", // Subject line
        text: "Esta Persona esta intentando ponerse en contacto contigo:", // plain text body
        html: output // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      res.status(200).send("Todo OK");
    }

    main().catch(() => {
      res.status(500).send("Error");
    });
  });



const server = http.createServer(app);

server.listen(port, () => console.log('Server Running'));
