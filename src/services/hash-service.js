const bcrypt = require('bcryptjs');

class HashService {
    hashPassword(password) {
        const hash = bcrypt.hashSync(password, 10)
        return hash;
    };

    verifyPassword(password, hashedPassword) {
        const matchPass = bcrypt.compareSync(password, hashedPassword);
        return matchPass;
    };
}

module.exports = HashService;