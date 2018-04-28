const nounModel=require('../models/nounModel');
const verbModel=require('../models/verbModel');
const contentModel=require('../models/contentModel');
const createNoun = (noun, callback) => {
  let newNoun = {
    noun: noun.noun
  };
  nounModel.create(newNoun, (err, data) => {
    if (err) {
      console.log(err.message);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}
const createVerb = (verb, callback) => {
  let newVerb = {
    verb: verb.verb
  };
  verbModel.create(newVerb, (err, data) => {
    if (err) {
      console.log(err.message);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}
const createContent = (content, callback) => {
  let newContent = {
    content: content.content,
    keyword: content.keyword,

  };
  contentModel.create(newContent, (err, data) => {
    if (err) {
      console.log(err.message);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const getKeywordList=(callback)=>{
contentModel.distinct('keyword',(err,results)=>{
  let keywordList=results;
  callback(keywordList);
});
};
const getContentList=(callback)=>{
contentModel.distinct('content',(err,results)=>{
  let contentList=results;
  callback(contentList);
});
};
const getNounList=(callback)=>{
  nounModel.distinct('noun',(err,results3)=>{
  let nounList=results3;
  callback(nounList);
  })
}
const getVerbList=(callback)=>{
  verbModel.distinct('verb',(err,results3)=>{
  let verbList=results3;
  callback(verbList);
  })
}
const getAnswerList=(callback)=>{
  contentModel.find({},(err,data)=>{
    if(err)
    callback(err);
    else {
      callback(data);
    }
  })
}
const getAnswer=(text,callback)=>{
  let text2=text.toLowerCase();
  let noun,verb,keyword,answer;
  let nounList=getNounList((nounList)=>{
    for(var i=0;i<nounList.length;i++)
      if(text2.indexOf(nounList[i])!=-1)
        {noun=nounList[i];
        break;
        }
      else
        noun=null;
    if(noun==null)
    {  answer="Bạn vui lòng nhập đúng thông tin cần tìm";
      return callback(answer);
    }
      else {
        let verbList=getVerbList((verbList)=>{
          for(var i=0;i<verbList.length;i++)
            if(text2.indexOf(verbList[i])!=-1)
            {verb=verbList[i];
            break;
           }
            else
              verb=null;
              if(verb==null)
            {   answer="Bạn vui lòng nhập đúng thông tin cần tìm";
               return callback(answer);
             }
              else {
                keyword=noun+" "+verb;
                let answerList=getAnswerList((answerList)=>{
                  let content2;
                  for(var i=0;i<answerList.length;i++)
                      if(keyword.indexOf(answerList[i].keyword)!=-1)
                      {answer=answerList[i].content;     
                      break;
                      }
                      else
                       answer=null;
                      if(answer==null)
                       answer="Vui lòng liên hệ abc xyz để biết thêm chi tiết";                
                      return callback(answer);
                })


              }
        })

      }
  })
}


module.exports={
  createNoun,createVerb,createContent,getAnswer,
  getNounList,
  getContentList,
  // test,
  }
