require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// var nodemailer = require('nodemailer');
const app = express();
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
app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })



//**********************************//
//      SAY HELLO WITH NODEMAILER   //
//**********************************//
var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

// function handleSayHello(req, res) {
//     // Not the movie transporter!
//     var transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.GMAIL_EMAIL, // Your email id
//             pass: process.env.GMAIL_PASSWORD // Your password
//         }
//     });

//     var text = `Hello world from \n\n + ${req.body.name}`;
//     var mailOptions = {
//       from: process.env.GMAIL_EMAIL, // sender address
//       to: process.env.GMAIL_EMAIL, // list of receivers
//       subject: 'Email Example', // Subject line
//       text: text //, // plaintext body
//       // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//       if(error){
//           console.log(error);
//           res.json({yo: 'error'});
//       }else{
//           console.log('Message sent: ' + info.response);
//           res.json({yo: info.response});
//       };
//     });
// }
//**********************************//
//      NODEMAILER DOCUMENTATION    //
//**********************************//

'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport

function handleSayHello(req, res) {
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <agiledevelopmentconsulting@gmail.com>', // sender address
    to: 'agiledevelopmentconsulting@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
}
//**********************************//
//          PORT LISTENER           //
//**********************************//

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})