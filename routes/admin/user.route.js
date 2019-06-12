var express = require('express');
var userModel = require('../../models/user.model');
var supporter = require('../../utils/supporters');
var moment = require('moment');

var router = express.Router();


router.get('/', (req, res) => {
    var p = userModel.all();
    p.then(rows => {
        console.log(rows);
        res.render('admin/vwUser/index', {
            users: rows
        });
    }).catch(err => {
        console.log(err);
    });
})

router.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('userModel/vwUser/edit', { error: true });
        return;
    }

    userModel.single(id).then(rows => {
        if (rows.length > 0) {
            res.render('admin/vwUser/edit', {
                error: false,
                category: rows[0]
            });
        } else {
            res.render('admin/vwUser/edit', { error: true });
        }
    }).catch(err => {
        console.log(err);
    });
})

router.get('/add', (req, res) => {
    res.render('admin/vwUser/add');
})

router.post('/add', (req, res) => {
    var currDate = supporter.getCurrentDate();
    var dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');

    var entity = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        permission: req.body.permission,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        dob: dob,
        registerdate: currDate
    };

    userModel.add(entity)
    .then(id => {
        console.log('Id = ' + id + ': User is added.');
        res.render('admin/vwUser/add');
    }).catch(err => {
        console.log(err);
    })
})

router.post('/update', (req, res) => {
    userModel.update(req.body)
    .then(n => {
        res.redirect('/admin/user');
    }).catch(err => {
        console.log(err);
    })
})

router.post('/delete', (req, res) => {
    userModel.delete(req.body.CatID)
    .then(n => {
        res.redirect('/admin/user');
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;