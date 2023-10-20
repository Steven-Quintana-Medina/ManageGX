const controller = require("./controller");
const router = require("@awaitjs/express").Router();
const auth = require("../../middleware/auth");

router.postAsync('/:idMessageService',auth, controller.createUserMessageServices);
router.getAsync('/',auth,controller.getUserMessageServices);

module.exports = router;