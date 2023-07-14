const express = require('express');
const app = express();
const path = require('path');
const ruta = path.resolve(__dirname,'./public')
const dotenv = require('dotenv').config();

app.use(express.static(ruta))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/registroProducto',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/registroProducto.html'))
})

app.get('/views/register.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/views/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

 const port = process.env.PORT;

app.listen(port,()=>{
    console.log('Servidor andando en el puerto '+ port + '.')
})
