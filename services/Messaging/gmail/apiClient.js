const gmailSimulation = require("../../../simulations/gmailSimulation/controller");
const dto = require("./dto");

module.exports = {
  async getMessages(){
   const gmailMessage = await gmailSimulation.GetMessage();
   res.status(200).send(dto.multiple(gmailMessage));
  } 
};