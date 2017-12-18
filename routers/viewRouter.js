const express = require('express');
const router = express.Router();
const textController=require('../controllers/textController');

router.get('/',(req,res)=>{

  res.render("result");


})
router.post('/',(req,res)=>{
  let str=textController.getAnswer(req.body.text,str=>{
    res.render("result",{answer:str});
  })
})
module.exports = router;
