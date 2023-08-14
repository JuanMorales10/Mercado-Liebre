const productModel = require('../modals/productModel')

const controller = {

    getRegistroProducto: (req, res) => {
        res.render('registroProducto')
    },
    getEditProduct:(req, res) => {
        const productId = req.params.id;
        const selectedProduct = productModel.findById(productId);
        res.render('editProduct', {product : selectedProduct})
    },
    createProduct: (req, res) => {
        
        const newProduct = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria,
            ciudad: req.body.ciudad,
            image: req.file.filename,
            descripcion: req.body.descripcion,
            enOferta: false
        }

        const createdProduct = productModel.createProduct(newProduct);

        res.redirect("/");
    },
    editProduct: (req, res) => {

        let updatedProduct = {
          id: Number(req.params.id),
        };
    
        updatedProduct = {
          ...updatedProduct,
          ...req.body,
        };
    
        productModel.updateProduct(updatedProduct);
    
        res.redirect('/');
    },
    deleteProduct:(req, res) => {

        productModel.deleteProduct(Number(req.params.id));
    
        res.redirect("/")
    }

}


module.exports = controller;