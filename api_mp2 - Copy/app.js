// Define file type and unctionality 
const express = require('express'); // Use express framework
const app = express();

// Mount products requests form app_routes/router.products
const productsRouter = require('./app_routes/router.products');
app.use('/', productsRouter);

// Mount users requests form app_routes/router.users
const usersRouter = require('./app_routes/router.users');
app.use('/', usersRouter);

// Export the app instance to make it available for use in other parts of the application
module.exports = app;