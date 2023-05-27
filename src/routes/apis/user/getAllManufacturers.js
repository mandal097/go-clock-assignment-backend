const User = require('../../../models/User');

const router = require('express').Router();

// get list of all manufacturer @http://localhost:5000/api/v1/user/get-all-manufacturers
router.get('/', async (req, res) => {
    try {
        const users = await User.find({ _id: { $nin: [req.payload.id] }, role: "manufacturer" }).select('-password');
        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error) {
        res.status(500).json({
            status: 'err',
            message: 'Something went wrong'
        })
    }
});

module.exports = router;
