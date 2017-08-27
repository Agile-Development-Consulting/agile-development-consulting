require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const NodemailerController = require("./controllers/nodemailer");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/agile-development-consulting

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());

app.use('/sayHello', NodemailerController);
app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })






//**********************************//
//      NODEMAILER DOCUMENTATION    //
//**********************************//

// 'use strict';
// const nodemailer = require('nodemailer');

// // create reusable transporter object using the default SMTP transport

// function handleSayHello(req, res) {
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // secure:true for port 465, secure:false for port 587
//     auth: {
//         user: 'agiledevelopmentconsulting@gmail.com',
//         pass: 'adcP0420!'
//     }
// });

// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Fred Foo 👻" <agiledevelopmentconsulting@gmail.com>', // sender address
//     to: 'agiledevelopmentconsulting@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plain text body
//     html: '<b>Hello world ?</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });
// }
//**********************************//
//          PORT LISTENER           //
//**********************************//

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})