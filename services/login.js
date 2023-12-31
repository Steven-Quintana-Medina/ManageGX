const router = require("express").Router();
const dao = require("../apiServices/user/dao");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const user = await dao.getUserByEmail({email: req.body.email});

  try {
    if (user) {
      const password = bycript.compareSync(req.body.password, user.password);
      if (!password)
        res.status(400).send({
          message: "invalid user or password",
        });
      const jwtoken = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        config.get("token.SEED"),
        { expiresIn: config.get("token.expiration") }
      );

      res.status(200).send({
        token:jwtoken
      });
    } else {
      res.status(400).send({
        message: "invalid user or password",
      });
    }
  } catch {}
});

module.exports = router;