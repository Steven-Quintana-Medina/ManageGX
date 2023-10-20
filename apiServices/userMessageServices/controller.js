const dao = require("./dao");
const dto = require("./dto");

module.exports = {
    async createUserMessageServices(req, res) {
        await dao.createUserMessageServive({
            id_user: req.token.id,
            id_message_service: req.params.idMessageService
        });
        res.status(201).send({ message: "recourse created" });
    },
    async getUserMessageServices(req, res) {
        let userMessageServices = await dao.getUserMessageServives({ id_user: req.token.id })
        userMessageServices = JSON.stringify(userMessageServices, null, 2);
        userMessageServices = JSON.parse(userMessageServices);
        console.log(userMessageServices)
        res.status(200).send(dto.multiple(userMessageServices));
    }
}