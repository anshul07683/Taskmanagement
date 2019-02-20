const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const ClientProjectSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  client_id:String,
  project_title:String,
  project_body:String,
  comments:[]

});

module.exports = mongoose.model('Clientprojects',ClientProjectSchema)