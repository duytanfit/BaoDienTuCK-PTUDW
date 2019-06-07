var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select IDUser, FirstName, Email from User where Permission = 3');
    },

    choose: id => {
        return db.load(`select c.NameCategory from category c where not EXISTS(
        select *
        from permissioncategory p
        where c.IDCategory = p.IDCategory
        and p.IDUser = "${id}")`);
    },

    single: id =>{
        return db.load(`SELECT user.IDUser, NameParrent, NameCategory FROM  user , permissioncategory, category, parrentcategory
        WHERE user.IDUser = permissioncategory.IDUser 
        AND permissioncategory.IDCategory= category.IDCategory 
        AND user.IDUser = "${id}" 
        AND parrentcategory.IDParrent= category.IDParrent `);
    },

    singleEdit: id =>{
        return db.load(`SELECT user.IDUser, NameParrent, NameCategory FROM  user , permissioncategory, category, parrentcategory
        WHERE user.IDUser = permissioncategory.IDUser 
        AND permissioncategory.IDCategory= category.IDCategory 
        AND user.IDUser = "${id}" 
        AND parrentcategory.IDParrent= category.IDParrent `);
    },

    add:(id,name)=>{
        return db.add(id,name);
    }

    
};