const controller =  require("./controller");
const router = require("@awaitjs/express").Router();

router.getAsync('/',controller.getMessages);

module.exports = router;