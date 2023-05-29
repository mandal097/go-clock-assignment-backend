const router = require('express').Router();
const Message = require('../../../models/Message');



//creating chat  @http://localhost:5000/api/v1/message/fetch/:orderId
router.get('/:orderId', async (req, res) => {
    try {
        const messages = await Message.find({ orderId: req.params.orderId })
            .populate('sender', 'name email');

        return res.json({
            status: 'success',
            message: 'Message fetched',
            data: messages
        })

    } catch (error) {
        return res.json({
            status: 'err',
            message: 'Something went wrong',
            error
        });
    };
})

module.exports = router;