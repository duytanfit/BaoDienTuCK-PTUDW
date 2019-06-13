var mysql = require('mysql');

var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'fit_news_data_new'
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
    update: (exp,iduser)=>{
        return new Promise((resolve, reject) => {
            var sql= `UPDATE adddate SET EXP = ? WHERE IDUser  = ? `
            var connection = createConnection();
            connection.connect();
            connection.query(sql,[exp,iduser], function(error, value) {
                if (error) {
                    reject(error);
                } else {
                    resolve(value.insertID);
                }
                connection.end();
            });
        });
    },
};