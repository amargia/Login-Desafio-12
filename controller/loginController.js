const login = require('../data/login.js');

class loginController {
    static save(object) {
        return login.save(object);
    }
}

module.exports = loginController;