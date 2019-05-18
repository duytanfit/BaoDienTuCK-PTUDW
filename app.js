var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home');
});

var cRouter = require('./routes/admin/category.route');
app.use('/admin/categories', cRouter);

app.listen(3333, () => {
    console.log('Web Server running at localhost:3333');
});