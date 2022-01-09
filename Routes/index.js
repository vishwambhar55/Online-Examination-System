const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller');

// console.log('router loaded');


router.get('/', homeController.home);
router.use('/AdminSignup',require('./AdminSignup'));
router.use('/StudentSignup',require('./StudentSignup'));


module.exports = router;