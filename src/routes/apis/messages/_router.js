const router = require('express').Router();
const auth = require('../../../middleware/auth');
const sendMessage = require('./sendMessage');
const getMessage = require('./getMessage');


router.use('/post', auth, sendMessage);  //posting message to a selected chat
router.use('/fetch', auth, getMessage);  //fetching  messages of a particular chat


module.exports = router;