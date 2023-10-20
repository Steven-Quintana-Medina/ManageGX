const MessageService = require("./model");
module.exports = {
    async getMessageServiceByName(data){
        return await MessageService.findOne({where: {name: data.name}});
    },

    async getMessageServicenById(data){
        return await MessageService.findOne({where: {id: data.id}});
    },

    async getMessageServices(){
        return await MessageService.findAll();
    },

    async createMessageService(data){
        const messageServiceValidation = await this.getMessageServiceByName(data);
        if(messageServiceValidation) return false;
        return await MessageService.create(data);
    }
    
};
