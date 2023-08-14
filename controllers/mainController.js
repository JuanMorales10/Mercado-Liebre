const path = require('path');

const controller = {
    getHome: (req,res)=>{
        res.render('home')
    },
}


module.exports = controller;