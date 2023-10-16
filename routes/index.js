const router = require("express").Router();
const user = require("../apiServices/user/routes");
const login = require("../services/login");
const gmail = require("../services/Messaging/gmail/routes");

router.use("/user", user);
router.use("/login", login);
router.use("/gmail",gmail);
module.exports = router;
