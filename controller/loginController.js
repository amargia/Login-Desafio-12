const login = require('../data/login.js');

class loginController {
    static save(user) {
        return login.save(user);
    }
}

module.exports = loginController;