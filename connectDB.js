const mongoose = require("mongoose");
function ConnectDB(url){
  return mongoose.connect(url);
}
module.exports = ConnectDB;
