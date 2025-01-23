const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

// CORS configuration: Only allow requests from your frontend URL
const corsOptions = {
  origin: 'https://e-commerce-rfhd.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],  // Allow the necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

// Use CORS with the above options
app.use(cors(corsOptions));

// Body parser to handle JSON requests
app.use(bodyParser.json());

// API routes
app.use('/api', productRoutes);

// Root endpoint to check server status
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
