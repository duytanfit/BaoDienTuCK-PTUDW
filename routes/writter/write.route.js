var express = require('express');
var moment = require('moment');
var temp = require('../../models/write.model');


var router = express.Router();


router.get('/editor', (req, res) => {
    var p = temp.choose();
    p.then(rows => {
        console.log(rows);
        res.render('writter/editor', {
            chuyenmuc: rows
            
        });
    }).catch(err => {
        console.log(err);
    });

})

module.exports = router;