function addProductToCart(id) {
    products.addProductToCart(id)
}

function renderProducts() {
    products.renderProducts()
}

function renderCart() {
    cart.renderCart()
}

function changeProductQty(event, id) {
    cart.changeProductQty(event, id)
}

function removeCartProduct(id) {
    cart.removeCartItem(id)
}