let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];

let cartTotal = 0;

function displayProducts() {
    const productList = document.getElementById("products");
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <p>${product.name} - Rs. ${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
            <button onclick="deleteProduct(${index})">Delete Product</button>
        `;

        productList.appendChild(productDiv);
    });
}

function addToCart(index) {
    cartTotal += products[index].price;
    document.getElementById("cart-total").innerText = `Total: Rs. ${cartTotal}`;
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function addProduct() {
    const name = document.getElementById("product-name").value.trim();
    const price = parseFloat(document.getElementById("product-price").value.trim());

    if (name && !isNaN(price)) {
        products.push({ name, price });
        displayProducts();
        document.getElementById("product-name").value = '';
        document.getElementById("product-price").value = '';
    } else {
        alert("Please enter valid product details.");
    }
}

displayProducts();
