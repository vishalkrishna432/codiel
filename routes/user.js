const express = require('express');
const router = express.router();

const userController = require('../controllers/user_controller');

router.get('/profile',userController.profile);

router.get('./sign-in',userController.signin);

router.get('./sign-in',userController.signup);