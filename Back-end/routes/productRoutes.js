

const express = require('express');
const { createProduct, getProductsByBrand, getProducts, getProductById, deleteAllProducts, deleteProduct, createProductsBulk } = require('../controllers/productController');
const router = express.Router();

router.post('/products/bulk', createProductsBulk);
router.delete('/products', deleteAllProducts);
router.post('/products', createProduct);
router.get('/products/brand/:brandName', getProductsByBrand);
router.get('/products', getProducts);

router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProduct);

module.exports = router;
