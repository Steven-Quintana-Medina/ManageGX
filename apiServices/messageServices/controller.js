const dao = require("./dao");
const dto = require("./dto");

module.exports = {
    async createMessageService(req, res) {
        const messageService = await dao.createMessageService({ name: req.body.name });
        if (messageService) return res.status(201).send({ message: "successfully registered message service" });
        return res.status(409).send({ error: "existing resource" })
    },

    async getMessageServices(req, res) {
        let messageServices = await dao.getMessageServices();
        res.status(200).send(dto.multiple(messageServices));
    }
}