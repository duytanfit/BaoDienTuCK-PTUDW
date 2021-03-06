var express = require('express');
var categoryModel = require('../../models/category.model');

var router = express.Router();


router.get('/', (req, res) => {
    var p = categoryModel.all();
    p.then(rows => {
        console.log(rows);
        res.render('admin/vwCategories/index', {
            categories: rows
        });
    }).catch(err => {
        console.log(err);
    });


})

router.get('/add', (req, res) => {
    res.render('admin/vwCategories/add');
})

module.exports = router;