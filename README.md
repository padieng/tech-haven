README.md
# Tech Haven - Full Stack Shopping Cart

## 🚀 How to Run This Project

1. Clone the repository:

2. Install dependencies:

3. Place your local SQLite database file as:

4. Start the server:

5. Open your browser:
- Frontend: `http://localhost:3000/index.html`
- API test: `http://localhost:3000/api/products`

## 📁 Project Structure

- `server.js` – Express app
- `db.js` – SQLite connection
- `routes/` – API endpoints (`products`, `cart`, `admin`)
- `controllers/` – Logic handlers for API
- `models/` – Database queries using better-sqlite3
- `public/` – Frontend files (HTML/CSS/JS)

## 🧪 API Endpoints (Stubs)

### Products
- `GET /api/products` – Get all products
- `GET /api/products/:id` – Get a single product

### Cart
- `POST /api/cart` – Add product to cart
- `DELETE /api/cart/:productId` – Remove product from cart
- `POST /api/cart/checkout` – Checkout the cart

### Admin
- `POST /api/admin/products` – Add a product
- `PUT /api/admin/products/:id` – Edit product
- `POST /api/admin/products/bulk` – Bulk upload products

## 🛠 Tech Stack

- Node.js
- Express.js
- better-sqlite3 (SQLite)
- Thunder Client (for testing)
- HTML/CSS/JS frontend
