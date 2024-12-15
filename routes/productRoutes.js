const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);  // Endpoint to get all products
router.post('/', addProduct);  // Endpoint to add a product

module.exports = router;
