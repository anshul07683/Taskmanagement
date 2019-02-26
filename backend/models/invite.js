const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
const InviteSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  developerId:String,
  clientId:String,
  projectId:String,

});
module.exports= mongoose.model('Invite',InviteSchema);