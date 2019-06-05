var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select IDUser, FirstName from User where Permission = 3');
    }
};