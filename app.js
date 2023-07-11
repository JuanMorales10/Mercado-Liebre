const express = require('express');
const app = express();
const path = require('path');
const ruta = path.resolve(__dirname,'./public')

app.use(express.static(ruta))

app.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'./views/home.html'))
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/registroProducto',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/registroProducto.html'))
})

app.listen(3080,()=>{
    console.log('Servidor andando en el puerto 3080')
})
