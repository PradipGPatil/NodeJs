const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/favicon.ico', (req, res) =>  res.status(204).end())

// we start with the admin routes anythis that starts with /admin will be handled by adminRoutes
app.use('/admin',adminRoutes);

app.use(shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000)