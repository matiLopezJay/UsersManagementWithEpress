// Define File Type and Function
const express = require('express');
const router = express.Router();

// Use the 'cors' middleware to allow cross-origin requests from your frontend
const cors = require('cors'); // Import the 'cors' middleware
router.use(cors()); // Enable CORS for all routes

// Create a simple request logger middleware
const morgan = require('morgan'); // Import the morgan package
router.use(morgan('dev') );

// Mount the user controller from the app_controllers directory
const userControllers = require('../app_controllers/controller.users.js');

// Define routes to handle user data
router.get('/users', userControllers.read);
router.get('/users/:id', userControllers.readById);
// router.delete('/users/:id', userControllers.deleteById);
// router.put('/users/:id', userControllers.updateById);

// Export routes
module.exports = router;
