const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route imports
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart'); // ✅ You MUST add this line
const adminRoutes = require('./routes/admin');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes); // ✅ And this one
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
