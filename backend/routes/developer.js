var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
var Clientpost = require('../models/clientproject')
const Developers = require("../models/developeruser")
const Invite  = require('../models/invite')

router.get('/fetchinvite',(req,res,next)=>{
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

router.post('/inviteaccept',(req,res,next)=>{
  console.log('invite is callling from express',JSON.stringify(req.body))
  Clientpost.findOneAndUpdate({_id:req.body.id},{$set:{assigned:true}})
  .catch(error=>console.log(error));
  res.status(200).json({message:"accepeted"})
});




router.post('/invitereject',(req,res,next)=>{
  console.log('invite  reject is callling from express',JSON.stringify(req.body))
  Clientpost.findOneAndUpdate({_id:req.body.id},{$set:{assigned:false,developer_id:null}})
  .catch(error=>console.log(error));
  res.status(200).json({message:"rejected"})
});

module.exports = router;