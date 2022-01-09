const express = require('express');
const router = express.Router();
const AdminSignupController = require("../controllers/AdminSignupController")

router.get('/admin',AdminSignupController.Admin);
router.post('/create',AdminSignupController.Create);

module.exports = router;