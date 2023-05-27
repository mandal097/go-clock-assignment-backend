const router = require("express").Router();
const testRoute = require("./test");
const userRoutes = require("./apis/user/_router");

router.use('/', testRoute);  //test route
router.use('/user', userRoutes); // users routes

module.exports = router;