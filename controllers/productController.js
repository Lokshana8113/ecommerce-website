const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Error retrieving products');
  }
};

// Add a new product
const addProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    image,
  });

  try {
    await newProduct.save();
    res.json({ message: 'Product added successfully' });
  } catch (err) {
    res.status(500).send('Error adding product');
  }
};

module.exports = { getProducts, addProduct };
