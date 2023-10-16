const config = require("config");
const Imap = require('imap');
const {simpleParser} = require('mailparser');
const imap = new Imap(config.get("imapConfig"));

module.exports = {
  async getMessages(req, res){
    const getEmails = () =>{
      try{
        imap.once('ready',()=>{
          imap.openBox('IMBOX',false,()=>{
            imap.search(['UNSEEN',['SINCE', new Date()]],(err,results)=>{
              const fetch = imap.fetch(results, {bodies:''});
              fetch.on('message',message=>{
                message.on('body',stream=>{
                  
                });
              });
            });
          });
        });
      }
      catch(ex){
        console.log("An error occurred while the emails were being brought in")
      }
  };
  } 
};