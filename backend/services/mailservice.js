var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
var Clientpost = require('../models/clientproject')
const Developers = require("../models/developeruser")
const Invite  = require('../models/invite')
const nodemailer = require("nodemailer");


function mail(req,res){

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anshuljain07683@gmail.com',
    pass: '9754447092'
  }
});

var mailOptions = {
  from: 'anshuljain07683@gmail.com',
  to: req.body.developeremail,
  subject: 'Project Invitation from Taskmanagement',
  text:"you are invited for this Project"+req.body.projectId,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}