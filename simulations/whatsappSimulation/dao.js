const WhatsappSimulation = require("./model");

module.exports = {
    async getMessages(id_user){
     return await WhatsappSimulation.findAll({where: {id_user:id_user}});
    } 
  };