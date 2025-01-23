const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false

  })
})
app.use(cors({
  origin: "https://e-commerce-rfhd.vercel.app/"
}));
app.use(bodyParser.json());
app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
