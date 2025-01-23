const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(bodyParser.json());


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
