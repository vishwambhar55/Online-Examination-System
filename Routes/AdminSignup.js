const express = require('express');
const router = express.Router();
const passport = require('passport');
const AdminSignupController = require("../controllers/AdminSignupController")
router.get('/adminHome',passport.checkAuthentication,AdminSignupController.AdminHome);
router.get('/AdminSignup/admin',AdminSignupController.Admin);
router.get('/sign-in',AdminSignupController.Signin);
router.post('/create',AdminSignupController.Create);
router.post('/create-session', passport.authenticate(
    'admin',
    {
     failureRedirect: '/'},
),  AdminSignupController.createSession);
router.get('/sign-out',AdminSignupController.destroySession);
module.exports = router;