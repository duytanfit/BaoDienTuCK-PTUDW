var mysql = require('mysql');

var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'fit_news_data'
    });
}

module.exports = {
    load: sql => {
        return new Promise((resolve, reject) => {
            var connection = createConnection();
            connection.connect();
            connection.query(sql, function(error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
                connection.end();
            });
        });

    },

    add: (id,name)=>{
        return new Promise((resolve, reject) => {
            var sql= `insert into permissioncategory ( IDUser, IDCategory)
            SELECT DISTINCT p.IDUser, c.IDCategory 
            FROM category c, permissioncategory P
            WHERE c.NameCategory=?
            and P.IDUser=?
            `
            var connection = createConnection();
            connection.connect();
            connection.query(sql,[name,id], function(error, value) {
                if (error) {
                    reject(error);
                } else {
                    resolve(value.insertID);
                }
                connection.end();
            });
        });
    }
};