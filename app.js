var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home');
});

//app.use('/admin/categories', require('./routes/admin/category.route'));

app.use('/admin/percategory', require('./routes/admin/percategory.route'));

app.listen(3333, () => {
    console.log('Web Server running at localhost:3333');
});