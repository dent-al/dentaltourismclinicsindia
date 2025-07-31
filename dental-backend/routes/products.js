const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Helper to parse JSON fields from MySQL
function parseProductRow(row) {
  return {
    ...row,
    images: row.images ? JSON.parse(row.images) : [],
    buyLinks: row.buyLinks ? JSON.parse(row.buyLinks) : [],
    reviews: row.reviews ? JSON.parse(row.reviews) : [],
  };
}

// Get all products
router.get('/', (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results.map(parseProductRow));
  });
});

// Get product by ID
router.get('/:id', (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (!results || results.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json(parseProductRow(results[0]));
  });
});

// Add a new product
router.post('/', (req, res) => {
  const { name, description, price, images, buyLinks, reviews } = req.body;
  const data = {
    name,
    description,
    price,
    images: JSON.stringify(images || []),
    buyLinks: JSON.stringify(buyLinks || []),
    reviews: JSON.stringify(reviews || []),
  };
  Product.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, ...req.body });
  });
});

// Update a product
router.put('/:id', (req, res) => {
  const { name, description, price, images, buyLinks, reviews } = req.body;
  const data = {
    name,
    description,
    price,
    images: JSON.stringify(images || []),
    buyLinks: JSON.stringify(buyLinks || []),
    reviews: JSON.stringify(reviews || []),
  };
  Product.update(req.params.id, data, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: req.params.id, ...req.body });
  });
});

// Delete a product
router.delete('/:id', (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

module.exports = router;
