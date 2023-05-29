const Order = require('../../../models/Order');

const router = require('express').Router();



// fetching manufacturers orders @http://localhost:5000/api/v1/order/get/manufacturer-orders
router.get('/manufacturer-orders', async (req, res) => {
    const orders = await Order.find({ manufacturerId: req.payload.id })
        .populate('manufacturerId', '-password')
        .populate('transporter', '-password')
        .sort({ createdAt: -1 })

    if (!orders) {
        return res.json({
            status: 'err',
            message: 'Orders not found'
        })
    }
    try {
        return res.json({
            status: 'success',
            message: 'Orders fetched',
            data: orders
        })
    } catch (error) {
        return res.status(500).json({
            status: 'err',
            message: 'Something went wrong',
            error: error
        })
    }
})



// fetching transporter orders @http://localhost:5000/api/v1/order/get/transporter-orders
router.get('/transporter-orders/:transporterId', async (req, res) => {
    const orders = await Order.find({ transporter: req.params.transporterId })
        .populate('manufacturerId', '-password')
        .populate('transporter', '-password')
        .sort({ createdAt: -1 })

    if (req.payload.id !== req.params.transporterId) {
        return res.json({
            status: 'err',
            message: 'Wrong credentials'
        })
    }

    if (!orders) {
        return res.json({
            status: 'err',
            message: 'Orders not found'
        })
    }
    try {
        return res.json({
            status: 'success',
            message: 'Orders fetched',
            data: orders
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