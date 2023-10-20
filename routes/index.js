const router = require("express").Router();
const user = require("../apiServices/user/routes");
const login = require("../services/login");
const messageService = require("../apiServices/messageServices/routes");
const userMessageService = require("../apiServices/userMessageServices/routes");

const gmail = require("../services/Messaging/gmail/routes");

router.use("/user", user);
router.use("/login", login);
router.use("/gmail",gmail);
router.use("/message-service",messageService);
router.use("/user-message-service", userMessageService);
module.exports = router;
