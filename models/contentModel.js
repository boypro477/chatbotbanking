const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const contentModel=new Schema({

    content:{type:String,require:true,unique:true},
    keyword:{type:String,require:true,unique:true},
});
module.exports=mongoose.model('content',contentModel)
