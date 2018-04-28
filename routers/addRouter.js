const express=require('express');
const router=express.Router();
const textController=require('../controllers/textController');

router.get('/verb',(req,res)=>{
  res.render('addVerb');
});
router.post('/verb',(req,res)=>{
  textController.createVerb(req.body, (err, data) => {
    if(err)
      res.redirect('/');
    else
      res.redirect('/add/verb');
  });
});
router.get('/noun',(req,res)=>{
  res.render('addNoun');});
router.post('/noun',(req,res)=>{
  textController.createNoun(req.body, (err, data) => {
    if(err)
      res.redirect('/');
    else
      res.redirect('/add/noun');
  });
});

router.get('/content',(req,res)=>{
  res.render('addContent');})
router.post('/content',(req,res)=>{
  textController.createContent(req.body, (err, data) => {
    if(err)
      res.redirect('/');
    else
      res.redirect('/add/content');
  });
})
module.exports = router;
