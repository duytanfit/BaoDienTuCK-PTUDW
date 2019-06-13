var express = require('express');
var bcrypt = require('bcrypt');
var moment = require('moment');
var passport = require('passport');
var userModel = require('../../models/user.model');
var auth = require('../../middlewares/auth');

var router = express.Router();

router.get('/is-available', (req, res, next) => {
    var user = req.query.username;
    userModel.singleByUserName(user).then(rows => {
      if (rows.length > 0) {
        return res.json(false);
      }
  
      return res.json(true);
    })
})

router.get('/register', (req, res, next) => {
  res.render('user/vwAccount/register');
})

router.post('/register', (req, res, next) => {
  var saltRounds = 10;
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');

  var entity = {
    IDUser: req.body.username,
    Password: hash,
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    Email: req.body.email,
    NickName: "tantan",
    BOD: dob,
    Permission: 0,
    DateRegister: "19/02/05"
  }

  userModel.add(entity).then(id => {
    res.redirect('/account/login');
  })
})

router.get('/login', (req, res, next) => {
    res.render('user/vwAccount/login', { layout: false });
})
  

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err)
        return next(err);
  
      if (!user) {
        return res.render('user/vwAccount/login', {
          layout: false,
          err_message: info.message
        })
      }
  
      req.logIn(user, err => {
        if (err)
          return next(err);
  
        return res.redirect('/');
      });
    })(req, res, next);
})

router.get('/profile', auth, (req, res, next) => {
  res.end('profile');
  console.log(req.user.IDUser);
})

module.exports = router;
