const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const ClientProjectSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  client_id:String,
  project_title:String,
  project_body:String,
  developer_id:{type:String, default:null},
  assigned:{type:Boolean,default:false},
  comments:[]

});

module.exports = mongoose.model('Clientprojects',ClientProjectSchema)