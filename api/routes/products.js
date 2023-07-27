// IMPORTS
const express = require('express');
const router = express.Router();

// File contains logic to handle various calls to the localhost:3000/products url

// GET
router.get('/', (req, res, next) => { // handle all get requets that point to the products url, if we had /products, then we'd expect the url to be /products/products
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

// POST
router.post('/', (req, res, next) => { // handle all get requets that point to the products url, if we had /products, then we'd expect the url to be /products/products
    const product = {
        name: req.body.name,
        price: req.body.price,
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

// GET with productId parameter in URL
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message:'you discovered the secret ID!',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

// PATCH with productId parameter in URL
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product updated!'
    });
});

// DELETE with productId parameter in URL
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product deleted!'
    });
});

module.exports = router;