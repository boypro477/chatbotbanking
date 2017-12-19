const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const contentModel=new Schema({
    keyword:{type:String,require:true,unique:true},
    content:{type:String,require:true},

});
module.exports=mongoose.model('content',contentModel)
