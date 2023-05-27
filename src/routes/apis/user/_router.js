const router = require("express").Router();
const registerRoute = require("./register");

router.use("/register", registerRoute);

module.exports = router;