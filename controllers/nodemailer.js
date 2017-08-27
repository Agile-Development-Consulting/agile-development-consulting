const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');

//**********************************//
//      SAY HELLO WITH NODEMAILER   //
//**********************************//

router.post('/', (req, res) => {
    console.log("Hit the nodemailer route");
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_EMAIL, // Your email id
            pass: process.env.GMAIL_PASSWORD // Your password
        }
    });
    // var text = `Hello world from \n\n + ${req.body.name}`;
    var text = "Hello world from me!";
    var mailOptions = {
        from: process.env.GMAIL_EMAIL, // sender address
        to: process.env.GMAIL_EMAIL, // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
      };
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
      });
}); // handle the route at yourdomain.com/sayHello

module.exports = router;