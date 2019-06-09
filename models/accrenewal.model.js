var db = require('../utils/accrenewal');

module.exports = {
    all: () => {
        return db.load('select u.IDUser, u.FirstName, u.Email, a.EXP from user u, adddate a where u.IDUser = a.IDUser and u.Permission = 1');
    },

    view: id =>{
        return db.load(`select u.IDUser, a.EXP from user u, adddate a where u.IDUser = a.IDUser and u.Permission =  1 and u.IDUser = "${id}"`);
    },
    update:(exp,iduser)=>{
        return db.update(exp,iduser);
    }
};