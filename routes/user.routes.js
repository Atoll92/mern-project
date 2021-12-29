
const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post("/register", function(req,res)
{ authController.signUP });

module.exports = router;