// Shopping Cart Array
let cart = [];

// Add items to the cart
function addToCart(productName, price) {
    const itemIndex = cart.findIndex(item => item.name === productName);
    
    if (itemIndex > -1) {
        // If the product already exists in the cart, update the quantity
        cart[itemIndex].quantity += 1;
    } else {
        // Otherwise, add a new item to the cart
        const newItem = {
            name: productName,
            price: price,
            quantity: 1
        };
        cart.push(newItem);
    }

    updateCart();
}

// Update the cart
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear current cart display
    cartItems.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartRow = `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="changeQuantity('${item.name}', this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
            </tr>
        `;

        cartItems.innerHTML += cartRow;
    });

    // Calculate total cost (including tax)
    let tax = total * 0.0675;
    let grandTotal = total + tax;

    // Display the cart totals
    cartTotal.innerHTML = `
        <p>Subtotal: $${total.toFixed(2)}</p>
        <p>Tax (6.75%): $${tax.toFixed(2)}</p>
        <p>Total: $${grandTotal.toFixed(2)}</p>
    `;
}

// Change the quantity of an item in the cart
function changeQuantity(productName, newQuantity) {
    const itemIndex = cart.findIndex(item => item.name === productName);
    cart[itemIndex].quantity = parseInt(newQuantity);
    updateCart();
}

// Remove items from the cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}
