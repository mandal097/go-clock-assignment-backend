const Order = require('../../../models/Order');
const User = require('../../../models/User');

const router = require('express').Router();

// post request of creating order @http://localhost:5000/api/v1/order/create
router.post('', async (req, res) => {
    const { to, from, quantity, address, transporter } = req.body;
    if (!quantity || !address || !transporter) {
        return res.json({
            status: 'err',
            message: 'All fields are required'
        })
    }

    if (req.payload.role === 'transporter') {
        return res.json({
            status: 'err',
            massage: 'Only manufacturers can create order'
        })
    }
    if (req.payload.id === transporter) {
        return res.json({
            status: 'err',
            massage: "You can't create order to yourself"
        })
    }

    const transporterDetail = await User.findById(transporter)
    const transporterName = transporterDetail?.name

    try {
        const newOrder = new Order({
            to: transporterName,
            from: req.payload.name,
            quantity,
            address,
            transporter,
            manufacturerId: req.payload.id
        })

        await newOrder.save();

        const fullOrderDetail = await Order.findOne({ _id: newOrder })
            .populate('manufacturerId', '-password')
            .populate('transporter', '-password')
        return res.json({
            status: 'success',
            message: 'Order created successfully',
            data: fullOrderDetail
        })

    } catch (error) {
        return res.status(500).json({
            status: 'err',
            message: 'Something went wrong',
            error: error
        })
    }
})

module.exports = router;