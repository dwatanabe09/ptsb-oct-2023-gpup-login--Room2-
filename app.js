// app.js

// Import necessary libraries or modules
const express = require('express');

// Initialize your application
const app = express();

// Define configurations
const port = 3000;

// Set up middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Export your application for further use
module.exports = app;
