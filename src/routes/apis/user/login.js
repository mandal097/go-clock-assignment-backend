const router = require('express').Router();
const User = require('../../../models/User');
const HashService = require('../../../services/hash-service');
const TokenService = require('../../../services/token-service');

const hash = new HashService();
const token = new TokenService();

//login user  @http://localhost:5000/api/v1/user/login
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({
            status: 'err',
            message: 'All fields are required'
        })
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                status: 'err',
                message: 'User not found '
            })
        }
        const isValid = hash.verifyPassword(req.body.password, user.password);
        if (!isValid) {
            return res.json({
                status: 'err',
                message: 'Wrong credentials'
            });
        }

        const access_token = token.generateToken({ id: user.id, name: user.name, email, role: user.role })
        const { password, ...others } = user._doc;
        return res.status(201).json({
            status: 'success',
            message: 'Logged in successfully',
            token: access_token,
            data: others
        })
    } catch (error) {
        res.status(500).json({
            status: 'err',
            message: 'Something went wrong',
            error: error
        })
    }
})

module.exports = router;
