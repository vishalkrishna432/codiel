const express = require('express');
const router = express.router();

const userController = require('../controllers/user_controller');

router.get('/profile',userController.profile);