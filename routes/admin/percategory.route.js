var express = require('express');
var categoryModel = require('../../models/percategory.model');

var router = express.Router();


router.get('/', (req, res) => {
    var p = categoryModel.all();
    p.then(rows => {
        console.log(rows);
        res.render('admin/vwPerCategory/listeditor', {
            categories: rows
        });
    }).catch(err => {
        console.log(err);
    });


})



module.exports = router;