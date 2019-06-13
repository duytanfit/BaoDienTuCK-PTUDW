var express = require('express');
var morgan = require('morgan');



var app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./middlewares/view-engine')(app);
require('./middlewares/session')(app);
require('./middlewares/passport')(app);

app.get('/', function(req, res) {
    res.render('home');
});

//app.use('/admin/categories', require('./routes/admin/category.route'));

app.use('/admin/percategory', require('./routes/admin/percategory.route'));
app.use('/admin/renewal', require('./routes/admin/accrenewal.route'));
app.use('/writter', require('./routes/writter/write.route'));
app.use('/admin/user', require('./routes/admin/user.route'));
app.use('/account', require('./routes/admin/account.route'));



app.use((req, res, next) => {
    res.render('404', { layout: false });
  })
  
  app.use((error, req, res, next) => {
    res.render('error', {
      layout: false,
      message: error.message,
      error
    })
  })

app.listen(3333, () => {
    console.log('Web Server running at localhost:3333');
});