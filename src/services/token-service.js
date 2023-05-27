const jwt = require('jsonwebtoken');

class TokenService {
    generateToken(paylod) {
        const token = jwt.sign(paylod, process.env.JWT_SECRET_KEY, {
            expiresIn: '10d'
        })
        return token
    }
};


module.exports = TokenService
