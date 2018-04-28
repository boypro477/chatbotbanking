const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verbModel=new Schema({
    verb:{type:String,require:true,unique:true},
});
module.exports=mongoose.model('verb',verbModel)
