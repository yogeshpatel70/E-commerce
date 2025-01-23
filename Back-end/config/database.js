const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ygurjar932:yogesh@cluster0.j92xz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
