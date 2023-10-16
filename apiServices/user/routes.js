const controller =  require("./controller");
const router = require("@awaitjs/express").Router();

router.postAsync('/',controller.createUsers);
router.getAsync('/',controller.getUsers);

module.exports = router;