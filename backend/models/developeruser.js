const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const DeveloperSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  Name:String,
  contact:Number,
  email:String,
  password:String

});

module.exports = mongoose.model('Developers',DeveloperSchema)