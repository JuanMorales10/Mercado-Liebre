const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require("multer");
const path = require("path");
const { body } = require('express-validator');

const validarRegistro = [
    body('nombre').notEmpty().withMessage('Debes Completar el Nombre'),
    body('precio').notEmpty().withMessage('Debes completar el Precio'),
    body('ciudad').notEmpty().withMessage('Debes Completar la Ciudad'),
    body('image').notEmpty().withMessage('Debes ingresar una imagen'),
    body('enOferta').notEmpty().withMessage('Debes Completar la Seccion: En Oferta'),
    body('descripcion').notEmpty().withMessage('Debes Completar la Descripcion'),
];


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
router.post('/registroProducto', upload.single('image'), validarRegistro ,productController.createProduct)

//Put
router.put('/editProduct/:id', upload.single('image') ,productController.editProduct)

//Delete
router.delete('/editProduct/:id', productController.deleteProduct)

module.exports = router;
