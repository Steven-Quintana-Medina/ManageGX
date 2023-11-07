const WhatsappSimulation = require("../../../simulations/whatsappSimulation/dao");

module.exports = {
  async getMessages(id_user){
   return await WhatsappSimulation.getMessages(id_user);
  } 
};