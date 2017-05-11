const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cartCtrl = require('./cartCtrl');
const config = require('./config');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: false
}));

app.get('/api/cart', cartCtrl.getCart);

app.post('/api/cart', cartCtrl.addProduct);







app.listen(3000, console.log('hi'));

