const router = require('express').Router();
const Message = require('../../../models/Message');



//sending message  @http://localhost:5000/api/v1/message/post/:orderId
router.post('/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const { content } = req.body;
    if (!content || !orderId) {
        return res.json({
            status: 'err',
            message: 'Invalid data'
        });
    }

    try {
        const newMessage = new Message({
            sender: req.payload.id,
            content,
            orderId
        });
        const savedMessage = await newMessage.save();

        return res.json({
            status: 'success',
            message: 'Message sent',
            // data: savedMessage
            data: {
                sender: { _id: req.payload.id },
                content,
                orderId
            }
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