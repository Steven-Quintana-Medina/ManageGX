const User = require("./model");

module.exports = {
  async getUsers() {
    return await User.findAll();
  },

  async getUser(data) {
    return await User.findOne({ where: { email: data.email } });
  },

  async createUsers(data) {
    const validation = await User.findOne({ where: { email: data.email} });
    if (!validation){
     await User.create(data);
      return true;
    }
    else return false;
   
  },
};
