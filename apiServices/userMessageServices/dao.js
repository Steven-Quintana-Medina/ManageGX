const UserMessageService = require("./model");
const MessageService = require("../messageServices/model");

module.exports = {
    async createUserMessageServive(data) {
        await UserMessageService.create(data);
    },
    async getUserMessageServives(data) {
        return await UserMessageService.findAll({
            where: {
                id_user: data.id_user
            },
            include:[
                {
                    model: MessageService,
                    require: true,
                }
            ]
        });
    }
}