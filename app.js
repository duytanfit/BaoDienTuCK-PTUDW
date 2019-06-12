var express = require('express');
var exphbs = require('express-handlebars');
var hbs_sections = require('express-handlebars-sections');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var numeral = require('numeral');


var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts',
    helpers:{
        format: val =>{
            return numeral(val).format('0,0');
        },
        section: hbs_sections()
    }
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home');
});

//app.use('/admin/categories', require('./routes/admin/category.route'));

app.use('/admin/percategory', require('./routes/admin/percategory.route'));
app.use('/admin/renewal', require('./routes/admin/accrenewal.route'));
app.use('/writter', require('./routes/writter/write.route'));
app.use('/admin/user', require('./routes/admin/user.route'));

app.listen(3333, () => {
    console.log('Web Server running at localhost:3333');
});