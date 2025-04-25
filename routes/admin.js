const express = require('express');
const router = express.Router();

router.post('/products', (req, res) => {
  res.json({ message: "Product created (stub)" });
});

router.put('/products/:id', (req, res) => {
  res.json({ message: `Product ${req.params.id} updated (stub)` });
});

router.post('/products/bulk', (req, res) => {
  res.json({ message: "Bulk upload successful (stub)" });
});

module.exports = router;
