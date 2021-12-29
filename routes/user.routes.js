
const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post("/register", function(req,res)
{ authController.signUP });
// router.post("/register", authController.signUp);
// router.post('/login', authController.signIn);
// router.get('/logout', authController.logout);
// router.post("/register", authController.signUp);

module.exports = router;