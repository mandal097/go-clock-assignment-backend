const router = require("express").Router();
const testRoute = require("./test");
const userRoutes = require("./apis/user/_router");
const messageRoutes = require("./apis/messages/_router");
const orderRoutes = require("./apis/orders/_router");

router.use('/', testRoute);  //test route
router.use('/user', userRoutes); // users routes
router.use('/message', messageRoutes); // message routes
router.use('/order', orderRoutes); // chat routes

module.exports = router;