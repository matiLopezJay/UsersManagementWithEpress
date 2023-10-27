// Append this file to to app.js
const app = require('./app.js');

// Use the 'cors' middleware to allow cross-origin requests from your frontend
const cors = require('cors'); // Import the 'cors' middleware
app.use(cors()); // Enable CORS for all routes

// Create a simple request logger middleware
const morgan = require('morgan'); // Import the morgan package
app.use(morgan('dev'));

// Define Desired Port Number
const port = 3030;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

