const controller = require("./controller");
const router = require("@awaitjs/express").Router();


router.postAsync('/',controller.createMessageService);
router.getAsync('/',controller.getMessageServices);

module.exports = router;