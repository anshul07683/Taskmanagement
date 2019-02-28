const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const task = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  projectId:String,
  title:String,
  description:String,
  startdate:String,
  duedate:String,
  assignedby:String,
  comments:[]

});

module.exports = mongoose.model('Task',task)