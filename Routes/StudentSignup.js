const express = require('express');
const router = express.Router();
const passport = require('passport');
const StudentSignupConroller = require("../controllers/StudentSignupConroller")
router.get('/studentHome',passport.checkAuthentication,StudentSignupConroller.StudentHome);
router.get('/studentHome/dash',passport.checkAuthentication,StudentSignupConroller.StudentHomedash);
router.get('/studentHome/profile',passport.checkAuthentication,StudentSignupConroller.StudentHomeprofile);
router.get('/StudentSignup/student',StudentSignupConroller.student);
router.get('/sign-in',StudentSignupConroller.Signin);
router.post('/create',StudentSignupConroller.Create);
router.post('/create-session', passport.authenticate(
    'student',
    {
     failureRedirect: '/'},
), StudentSignupConroller.createSession);
router.get('/sign-out',StudentSignupConroller.destroySession);
module.exports = router;