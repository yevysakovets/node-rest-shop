//IMPORTS
const express = require('express');
const router = express.Router();

// File contains logic to handle various calls to the localhost:3000/orders url

// GET "DEFAULT" url 'orders/'
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    })
});

// POST "default" url 'orders/'
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    })
});

// GET with orderId parameter in url
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    })
});

// DELETE with orderId parameter in url
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted',
        orderId: req.params.orderId
    })
});

module.exports = router;