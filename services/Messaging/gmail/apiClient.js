const gmailSimulation = require("../../../simulations/gmailSimulation/dao");

module.exports = {
  async getMessages(id_user){
   return await gmailSimulation.getMessages(id_user);
  } 
};