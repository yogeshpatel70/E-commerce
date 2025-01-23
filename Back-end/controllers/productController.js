const Product = require('../models/product');

exports.deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} products deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getProductsByBrand = async (req, res) => {
  try {
    const { brandName } = req.params;
    console.log('Brand Name:', brandName);  // Log the brand name
    const products = await Product.find({ brand: brandName });

    if (products.length === 0) {
      return res.status(404).json({ success: false, message: 'No products found for this brand' });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
exports.createProductsBulk = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body.products);
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, brand, minPrice, maxPrice } = req.query;

    // Log the query parameters to debug
    console.log("Query Params:", { page, limit, sort, brand, minPrice, maxPrice });

    // Filtering
    const query = {};
    if (brand) query.brand = brand;
    if (minPrice && maxPrice) {
      query.discountedPrice = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }

    // Sorting
    const sortOption = {};
    if (sort === 'price-asc') sortOption.discountedPrice = 1;
    if (sort === 'price-desc') sortOption.discountedPrice = -1;
    if (sort === 'newest') sortOption.addedDate = -1;

    // Pagination
    const skip = (page - 1) * limit;

    console.log("Final Query:", query);
    console.log("Sort Option:", sortOption);

    const products = await Product.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({ success: true, total, products });
  } catch (error) {
    console.error("Error in getProducts:", error); // Detailed logging of error
    res.status(500).json({ success: false, message: error.message });
  }
};