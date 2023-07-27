// IMPORTS
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// ROUTES
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// USING PACKAGES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// HANDLINGS CORS ERRORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') { //checks it he browser can make the request
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
        return res.status(200).json({});
    }
    next();
})

// ESTABLISHING ROUTES AND WHICH .JS FILES WILL HANDLE THEM
app.use('/products', productRoutes); // has the products.js file handle all requests going to the localhost:3000/products url
app.use('/orders', orderRoutes);

// ERROR HANDLING
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;