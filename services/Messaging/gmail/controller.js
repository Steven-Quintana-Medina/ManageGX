const apiClient = require("./apiClient");

module.exports = {
  async getMessages(req, res){
    apiClient.getMessages({
      email: req.body.email,
      password: req.body.password
    })
  } 
};