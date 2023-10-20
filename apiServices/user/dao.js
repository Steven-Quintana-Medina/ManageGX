const User = require("./model");

module.exports = {
  async getUsers() {
    return await User.findAll();
  },

  async getUserByEmail(data) {
    return await User.findOne({ where: { email:data.email } });
  },

  async createUsers(data) {
    let userValidation = await this.getUserByEmail({ email:data.email });
    if(userValidation) return false; 
    return await User.create(data);
  },
};
