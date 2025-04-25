window.onload = function () {
    // Populate cart items on page load
    populateCart();
};

// Get cart data from localStorage or default to an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function populateCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotalContainer = document.getElementById('cart-total');
    let total = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemRow = `
            <tr>
                <td>${item.name}</td>
                <td><img src="images/${item.name.replace(/\s+/g, '-').toLowerCase()}.jpg" alt="${item.name}" width="50"></td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="changeQuantity('${item.name}', this.value)"></td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeItem('${item.name}')">Remove</button></td>
            </tr>
        `;

        cartItemsContainer.innerHTML += itemRow;
    });

    const tax = total * 0.0675;
    const grandTotal = total + tax;

    cartTotalContainer.innerHTML = `
        <p>Subtotal: $${total.toFixed(2)}</p>
        <p>Tax (6.75%): $${tax.toFixed(2)}</p>
        <p>Total: $${grandTotal.toFixed(2)}</p>
    `;
}

// Change the quantity of an item
function changeQuantity(productName, newQuantity) {
    const itemIndex = cart.findIndex(item => item.name === productName);
    cart[itemIndex].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    populateCart();
}

// Remove item from the cart
function removeItem(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    populateCart();
}

// Checkout button handler
function checkout() {
    alert("Proceeding to checkout");
}
