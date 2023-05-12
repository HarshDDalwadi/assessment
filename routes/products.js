const express = require('express');
const { getProduct, getAllProducts, updateProduct, addProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.put('/addproduct', addProduct);
router.patch('/:id/update', updateProduct);

module.exports = router;