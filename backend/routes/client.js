
var express = require('express');

var router = express.Router();

const mongoose = require('mongoose');


const checkAuth = require('../middleware/check-auth');


var Clientpost = require('../models/clientproject')



// router.get('/studentpost',(req,res,next)=>{
//   FacultyPost.find()
//     .select("username title  body _id ")
//     .exec()
//       .then(docs =>{
//         console.log(docs);
//         res.setHeader('Content-Type', 'text/plain');
//         res.send(docs);
//       })
//       .catch(err =>{
//         console.log(err);
//         res.status(500).json({
//           error:err
//         })
//       })
// });

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

// router.post('/facultypost',(req,res,next)=>{
//   console.log("from routes",JSON.stringify(req.body))
//   console.log('post is callling from express')

//   const post = new FacultyPost({
//     _id: new mongoose.Types.ObjectId(),
//     username:req.body.username,
//     title:req.body.title,
//     body:req.body.body,

//   })
//   post.save().then(result=>{
//     console.log(result);
//   })
//   .catch(err => console.log(err));

//   res.status(200).json({
//     message: 'faculty post  request',
//     createdPost: post
//   });
// });


// router.get('/:postId',(req,res,next)=>{
//   const id = req.params.postId;
//   Post.findById(id)
//     .exec()
//     .then(doc=>{
//       console.log("from database",doc);
//       if(doc){
//         res.status(200).json({doc});
//       }
//       else{
//           res.status(404).json({message:'no  id found'})
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({error:err})
//     });
// });

// router.patch('/:postId',checkAuth,(req,res,next)=>{
//   const id = req.params.postId;
//   const updateOps ={
//     title:req.body.title,
//     body:req.body.body
//   }

//   Post.update({ _id:id }, { $set: updateOps }).exec()
//   .then(result =>{
//     console.log(result);
//     res.status(200).json(result);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status("error from patch route",500).json({
//       error:err
//     });

// });
// });

// router.delete('/:postId',checkAuth,(req,res,next)=>{
//   console.log('delete is calling from express')
//   const id = req.params.postId;
//   Post.remove({_id:id})
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error:err
//       });
//     });
// });
module.exports = router;