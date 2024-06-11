// server.js or app.js
const express = require('express');
const app = express();
const courierRoutes = require('./routes/courierRoutes');
const customerRoutes = require('./routes/customerRoutes');
const itemTransactionRoutes = require('./routes/itemTransactionRoutes');
const itemRoutes = require('./routes/itemRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const transactionRoutes = require('./routes/transactionRoutes')

app.use(express.json()); // for parsing application/json

// Use your routes
app.use('/', courierRoutes);
app.use('/', customerRoutes);
app.use('/', itemTransactionRoutes);
app.use('/', itemRoutes);
app.use('/', restaurantRoutes);
app.use('/', transactionRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

