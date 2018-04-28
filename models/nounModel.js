const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const nounModel=new Schema({
  noun:{ type : String, required: true,unique:true }
  });
module.exports = mongoose.model('noun', nounModel);
