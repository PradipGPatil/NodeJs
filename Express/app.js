const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/favicon.ico', (req, res) =>  res.status(204).end())

// we start with the admin routes anythis that starts with /admin will be handled by adminRoutes
app.use('/admin',adminRoutes);

app.use(shop);

app.use((req, res, next) => {
    res.send('<h1>Page Not Found</h1>');
});

app.listen(3000)