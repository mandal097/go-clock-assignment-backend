const router = require('express').Router();

const auth = require('../../../middleware/auth')
const createOrder = require('./createOrder');
const getOrders = require('./getOrders');


router.use('/create', auth, createOrder);
router.use('/get', auth, getOrders);


module.exports = router;