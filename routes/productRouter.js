const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

//Get
router.get('/registroProducto', productController.getRegistroProducto);
router.get('/editProduct/:id', productController.getEditProduct)

//Post
router.post('/registroProducto', productController.createProduct)

//Put
router.put('/editProduct/:id', productController.editProduct)

//Delete
router.delete('editProduct/:id', productController.deleteProduct)

module.exports = router;
