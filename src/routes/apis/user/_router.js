const router = require("express").Router();
const registerRoute = require("./register");
const loginRoute = require("./login");
const getAllManufacturers = require("./getAllManufacturers");
const auth = require("../../../middleware/auth");
const getAllTransporters = require("./getAlltransporters");

router.use("/register", registerRoute);  //register
router.use("/login", loginRoute);  // login
router.use("/get-all-manufacturers", auth, getAllManufacturers);  // list of all manufaturers
router.use("/get-all-transporters", auth, getAllTransporters);  // list of all transporters

module.exports = router;