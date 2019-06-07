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


router.get('/view/:id', (req, res) => {
    var id = req.params.id;

    categoryModel.single(id).then(rows =>{
        console.log(typeof id);
        console.log(id.toString());
        var iduser = id;
        if(rows.length > 0){
            res.render('admin/vwPerCategory/view', {
                error: false,
                categories: rows,
                iduser: iduser
            });
        } else {
            res.render('admin/vwPerCategory/view', {
                error: true
            });
        }
        console.log(rows);

       // res.render('admin/vwPerCategory/view', {
         //   categories: rows
      //  });

        }).catch(err => {
        console.log(err);
        res.end('error occured')
    });

})

router.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    var p = categoryModel.choose(id);
    p.then(rows => {
        console.log(rows);
        var iduser = id;
        res.render('admin/vwPerCategory/edit', {
            editchuyenmuc: rows,
            iduser: iduser
        });
    }).catch(err => {
        console.log(err);
    });

})

router.get('/add/:id', (req, res) => {
    var id = req.params.id;
    var p = categoryModel.choose(id);
    p.then(rows => {
        console.log(rows);
        var iduser = id;
        res.render('admin/vwPerCategory/add', {
            editchuyenmuc: rows,
            iduser: iduser
        });
    }).catch(err => {
        console.log(err);
    });

})

router.post('/add', (req,res) =>{
    var id = req.params.id;
    
    categoryModel.add(req.body.IDUser,req.body.NameCategory)
    .then (id =>{
        res.redirect(`view/${req.body.IDUser}`)
    }).catch(err =>{
        console.log(err);
    })
})

module.exports = router;