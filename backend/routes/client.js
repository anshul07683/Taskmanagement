
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
var Clientpost = require('../models/clientproject')
const Developers = require("../models/developeruser")
const Invite  = require('../models/invite')
const nodemailer = require("nodemailer");
const mailService = require('../services/mailservice') ;


router.post('/clientpost',(req,res,next)=>{
  console.log(JSON.stringify(req.data));
  console.log('post is callling from express')

  const post = new Clientpost({
    _id: new mongoose.Types.ObjectId(),
    client_id:req.body.userId,
    project_title:req.body.title,
    project_body:req.body.body,

  })
  post.save().then(result=>{
    console.log(JSON.stringify(result));
  })
  .catch(err => console.log(err));
  res.status(200).json({
    message: 'Post request',
    createdPost: post
  });
});
//===============



router.get('/clientpost',(req,res,next)=>{
  Clientpost.find()
    .exec()
    .then(docs =>{
      console.log('data from backend',docs);
      res.setHeader('Content-Type', 'text/plain');
      res.send(docs);
      })
      .catch(err =>{
        console.log(err);
        res.status(500).json({
          error:err
        })
      })
});


router.get('/developers',(req,res,next)=>{
  Developers.find()
        .exec()
      .then(docs =>{
        console.log(docs);
        res.setHeader('Content-Type', 'text/plain');
        res.send(docs);
      })
      .catch(err =>{
        console.log(err);
        res.status(500).json({
          error:err
        })
      })
});


//invite developer--

router.post('/invitedeveloper',async(req,res,next)=>{
  let myObj={}
  myObj.developeremail=req.body.developeremail
  console.log("invitedeveloper from routes",JSON.stringify(req.body))

  let data = await Clientpost.find({_id:req.body.projectId})
  console.log("await data ",data)

  myObj.project_title=data.project_title;
  myObj.project_body= data.project_body;

  console.log("myobj",myObj)

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

  const invite = new Invite({
    _id: new mongoose.Types.ObjectId(),
    developerId:req.body.developerId,
    clientId:req.body.clientId,
    projectId:req.body.projectId,

  })
  invite.save().then(result=>{
    console.log(result);
  })
  .catch(err => console.log(err));

  res.status(200).json({
    message: 'successfully invite',
    createdPost: invite
  });
});

function sendMail(data){

}
module.exports = router;