const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/img/images"));
    },
  
    filename: (req, file, cb) => {
      const newFileName =
        "product-" + Date.now() + path.extname(file.originalname);
      cb(null, newFileName);
    },
  });

const upload = multer({ storage });

//Get
router.get('/registroProducto', productController.getRegistroProducto);
router.get('/editProduct/:id', productController.getEditProduct)

//Post
router.post('/registroProducto', upload.single('image') ,productController.createProduct)

//Put
router.put('/editProduct/:id', upload.single('image') ,productController.editProduct)

//Delete
router.delete('/editProduct/:id', productController.deleteProduct)

module.exports = router;
