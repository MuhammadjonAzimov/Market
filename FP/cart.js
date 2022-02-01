let localCartData = JSON.parse(localStorage.getItem("cartData"))
let cartData = localCartData ? localCartData : []

function renderCart(cartData) {
    const cartContainer = document.querySelector(".cart")
    cartContainer.innerHTML = ""
    for (let cartItem of cartData) {
        const div = document.createElement("div")
        div.classList.add("cart-item")

        div.innerHTML = `
            <div class="cart-header">
                <h3>${cartItem.title}</h3>
                <B>${cartItem.productprice} so'm</b>
            </div>
            <select onchange="changeProductQuantity(event, ${cartItem.id})" id="cart-quantity-select" value="${cartItem.quantity}">
                <option ${cartItem.quantity == 1 && "selected"} value="1">1</option>
                <option ${cartItem.quantity == 2 && "selected"} value="2">2</option>
                <option ${cartItem.quantity == 3 && "selected"} value="3">3</option>
                <option ${cartItem.quantity == 4 && "selected"} value="4">4</option>
            </select>
            <p>${cartItem.totalPrice} so'm</p>
            <button onclick="removeCartItem(${cartItem.id})" id="remove-cart-item" data-cart-id="${cartItem.id}">O'chirish</button>
        `
        cartContainer.appendChild(div)
    }
}

function changeProductQuantity(event, id) {
    const filteredCartItem = cartData.filter(cartItem => cartItem.id == id)[0]
    filteredCartItem.quantity = Number(event.target.value)
    filteredCartItem.totalPrice = filteredCartItem.productprice * filteredCartItem.quantity

    localStorage.setItem("cartData", JSON.stringify(cartData))
    renderCart(cartData)
}

function removeCartItem(cartId) {
    cartData = cartData.filter(cartItem => cartItem.id != cartId)
    renderCart(cartData)
    localStorage.setItem("cartData", JSON.stringify(cartData))
}

renderCart(cartData)