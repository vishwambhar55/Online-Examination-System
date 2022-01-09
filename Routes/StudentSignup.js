const express = require('express');
const router = express.Router();
const StudentSignupConroller = require("../controllers/StudentSignupConroller")

router.get('/student',StudentSignupConroller.student);

module.exports = router;