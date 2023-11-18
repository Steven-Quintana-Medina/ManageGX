const router = require("express").Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

const user = require("../apiServices/user/routes");
const login = require("../services/login");
const messageService = require("../apiServices/messageServices/routes");
const userMessageService = require("../apiServices/userMessageServices/routes");

const gmail = require("../services/Messaging/gmail/routes");
const whatsapp = require("../services/Messaging/whatsapp/routes");

router.use("/user", user);
router.use("/login", login);
router.use("/gmail",gmail);
router.use("/message-service",messageService);
router.use("/user-message-service", userMessageService);
router.use("/whatsapp",whatsapp);

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
