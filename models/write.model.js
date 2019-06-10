var db = require('../utils/writter');

module.exports = {
    all: () => {
        return db.load('select u.IDUser, u.FirstName, u.Email, a.EXP from user u, adddate a where u.IDUser = a.IDUser and u.Permission = 1');
    },
    choose: () => {
        return db.load(`select c.NameCategory from category c`);
    }
    
};