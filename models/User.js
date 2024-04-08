const mongoose = require("mongoose");
const schema = mongoose.Schema({
  UserID:{type:Number,unique:true,required:true},
  Name:{type:String,required:true},
});
module.exports = mongoose.model("User",schema);
