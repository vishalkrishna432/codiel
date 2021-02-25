const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');
console.log('router is loaded');
router.get('/',homeController.home);
router.use('/user',userController.profile);



module.exports = router;