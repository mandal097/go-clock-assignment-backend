const User = require("../../../models/User");
const HashService = require("../../../services/hash-service");
const TokenService = require("../../../services/token-service");

const router = require("express").Router();

const hash = new HashService();
const token = new TokenService();


//register user  @http://localhost:5000/api/v1/user/register
router.post('/', async (req, res) => {
    const { name, email, phone, password, address, role } = req.body;
    if (!name || !email || !phone || !password || !address || !role) {
        return res.json({
            status: 'err',
            message: 'All fields are required'
        })
    }
    const user = await User.findOne({ email });
    if (user) {
        return res.json({
            status: 'err',
            message: 'Phone/email already exists'
        })
    }
    const user_phone = await User.findOne({ phone });
    if (user_phone) {
        return res.json({
            status: 'err',
            message: 'Phone/email already exists'
        })
    }
    try {
        const newUser = new User({
            name,
            email,
            phone,
            role,
            address,
            password: hash.hashPassword(password)
        })
        const savedUser = await newUser.save();
        const access_token = token.generateToken({ _id: savedUser._id, name, email, role })
        // const { password, ...others } = savedUser._doc;
        return res.json({
            status: 'success',
            message: 'Registered successfully',
            token: access_token,
            data: savedUser
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