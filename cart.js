const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: "Product added to cart (stub)" });
});

router.delete('/:productId', (req, res) => {
  res.json({ message: `Product ${req.params.productId} removed from cart (stub)` });
});

router.post('/checkout', (req, res) => {
  res.json({ message: "Cart checked out (stub)" });
});

module.exports = router;
