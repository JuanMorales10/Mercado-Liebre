const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter')
const mainRouter = require('./routes/mainRouter')
const methodOverride = require('method-override');

// Configuración del motor de vistas y archivos estáticos
app.use(express.static("public"));
app.set("view engine", "ejs");

// Configuración de middlewares en el orden correcto
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//Rutas
app.use('/', mainRouter)
app.use('/product', productRouter)

 const port = process.env.PORT|| 3005;
app.listen(port, () => {
    console.log('Servidor andando en el puerto ' + port + '.')
});
