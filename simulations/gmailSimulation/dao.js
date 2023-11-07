const GmailSimulation = require("./model");

module.exports = {
    async getMessages(id_user){
     return await GmailSimulation.findAll({where: {id_user:id_user}});
    } 
  };