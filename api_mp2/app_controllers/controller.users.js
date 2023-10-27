// Import the required moduleconst
const fs = require('fs');

// Define the path to the users.json file
const usersFilePath = './app_models/users.json';

// Define the 'read' function to get all users
const read = (req, res) => {
    try {
        // Read users from the JSON file
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) {
                // Handle any error that occurs while reading the file
                console.error('Error reading users data:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            // Parse the JSON data to get an array of product objects
            const users = JSON.parse(data);

            // Send the product data as a JSON response with a 200 status code
            res.status(200).json(users);
        });
    } catch (error) {
        // Handle any other error that might occur
        console.error('Error reading users data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Define the 'readById' function to get a product by ID
const readById = (req, res) => {
    try {
        const productId = parseInt(req.params.id, 10); // Get the product ID from the request parameters

        // Read users from the JSON file
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) {
                // Handle any error that occurs while reading the file
                console.error('Error reading users data:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            // Parse the JSON data to get an array of product objects
            const users = JSON.parse(data);

            // Find the product with the specified ID
            const product = users.find((product) => product.id === productId);

            if (product) {
                // Send the product data as a JSON response with a 200 status code
                res.status(200).json(product);
            } else {
                // If the product is not found, return a 404 error response
                res.status(404).json({ error: 'Product not found' });
            }
        });
    } catch (error) {
        // Handle any other error that might occur
        console.error('Error reading users data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Define the 'deleteById' function to get a product by ID

// Define the 'updateById' function to get a product by ID

// Export functions
module.exports = {
    read,
    readById

};
