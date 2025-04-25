// Example admin.js for handling product edits and updates

// Dummy function to simulate editing a product
function editProduct(productId) {
    console.log('Editing product:', productId);
    // Redirect to the product-edit.html page with the product ID as a query parameter
    window.location.href = `product-edit.html?id=${productId}`;
}

// Dummy function to simulate deleting a product
function deleteProduct(productId) {
    console.log('Deleting product:', productId);
    const productRow = document.getElementById(productId);
    productRow.remove();
}

// Dummy function to simulate archiving a product
function archiveProduct(productId) {
    console.log('Archiving product:', productId);
    // Simulate archiving logic here
}

// Dummy function to filter products
function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const productList = document.getElementById('product-list').getElementsByTagName('tr');

    for (let product of productList) {
        const productName = product.cells[1].innerText.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? '' : 'none';
    }
}
