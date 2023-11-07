const controller =  require("./controller");
const router = require("@awaitjs/express").Router();
const auth = require("../../../middleware/auth");

router.getAsync('/',auth,controller.getMessages);

module.exports = router;