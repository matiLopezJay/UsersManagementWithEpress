const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application
const userController = require('./app.controllers/controller.users.js'); // Adjust the path to your userController file

// Use the cors middleware to enable CORS
const cors = require('cors'); // Import the cors package
app.use(cors());

// Import your user routes
// const userRoutes = require('./app.routes/route.users.js');
// app.use('/users', userRoutes); // You can specify a base route like "/api" if needed

// Use the userController as middleware
app.put('/users/:id', userController); // You can specify a base route like "/api" if needed
app.get('/users', userController);
app.get('/users/:id', userController);
app.delete('/users/:id', userController);
app.post('/users', userController);

module.exports = app; // Export the Express application to be used in other parts of your project
