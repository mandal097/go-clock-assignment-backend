const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
            if (error) {
                return res.json({
                    'status': 'err',
                    'message': 'Token Mismatched'
                })
            }
            req.payload = payload;
            next();

        });
    } else {
        return res.json({
            'status': 'err',
            'message': 'Header Token Missing'
        })
    }
};

module.exports = auth;