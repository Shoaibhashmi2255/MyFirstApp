// Import the Express module
const express = require ('express');

// Create an Express application
const app = express();

// Middleware 1: A middleware that calls the 'next' function
app.use ((req, res, next)=>{
    next();
})

// Middleware 2: Another middleware that sends a response
app.use ((req, res, next)=>{
    res.send('Hello from the express!');
})

// Export the Express application to be used in other files
module.exports = app;