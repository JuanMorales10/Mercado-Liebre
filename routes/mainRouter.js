const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

//Get
router.get('/', mainController.getHome);

module.exports = router;
