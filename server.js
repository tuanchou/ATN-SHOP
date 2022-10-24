require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const expressHandlebars = require('express-handlebars');
const employeeController = require('./controller/employeeController');
const productController = require('./controller/productController');
var app = express();


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});

app.set('view engine', 'hbs');

app.use('', router);
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening on Port 3000");
})
app.use('/product', productController);
app.use('/employee', employeeController);
