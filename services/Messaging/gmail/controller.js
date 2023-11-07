const apiClient = require("./apiClient");
const dto = require("./dto");

module.exports = {
  async getMessages(req, res){
    const gmailMessage = await apiClient.getMessages(req.token.id); 
    res.status(200).send(dto.multiple(gmailMessage));
},
};