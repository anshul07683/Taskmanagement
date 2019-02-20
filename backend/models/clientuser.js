const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const ClientSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name:String,
  contact:Number,
  email:String,
  password:String

});

module.exports = mongoose.model('Clients',ClientSchema)