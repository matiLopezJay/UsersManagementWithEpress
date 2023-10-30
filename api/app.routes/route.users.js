const express = require('express');
const router = express.Router();
const userController = require('../app.controllers/controller.users'); // Adjust the path to your userController file

// Define your user routes
router.put('/users/:id', userController);
router.get('/users', userController);
router.get('/users/:id', userController);
router.delete('/users/:id', userController);
router.post('/users', userController);

module.exports = router;
