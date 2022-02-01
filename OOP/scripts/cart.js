
const Cart = function () {
    this.localCartData = JSON.parse(localStorage.getItem("cartData"))
    this.cartData = this.localCartData ? this.localCartData : []
    this.cartContainer = document.querySelector(".cart")

    this.renderCart = function () {
        this.cartContainer.innerHTML = ""
        for (let cartItem of this.cartData) {
            const div = document.createElement("div")
            div.classList.add("cart-item")

            div.innerHTML = `
                <div class="cart-header">
                    <h3>${cartItem.title}</h3>
                    <B>${cartItem.productprice} so'm</b>
                </div>
                <select onchange="changeProductQty(event, ${cartItem.id})" id="cart-quantity-select" value="${cartItem.quantity}">
                    <option ${cartItem.quantity == 1 && "selected"} value="1">1</option>
                    <option ${cartItem.quantity == 2 && "selected"} value="2">2</option>
                    <option ${cartItem.quantity == 3 && "selected"} value="3">3</option>
                    <option ${cartItem.quantity == 4 && "selected"} value="4">4</option>
                </select>
                <p>${cartItem.totalPrice} so'm</p>
                <button onclick="removeCartProduct(${cartItem.id})" id="remove-cart-item" data-cart-id="${cartItem.id}">O'chirish</button>
            `
            this.cartContainer.appendChild(div)
        }
    }

    this.changeProductQty = function (event, id) {
        const filteredCartItem = this.cartData.filter(cartItem => cartItem.id == id)[0]
        filteredCartItem.quantity = Number(event.target.value)
        filteredCartItem.totalPrice = filteredCartItem.productprice * filteredCartItem.quantity

        localStorage.setItem("cartData", JSON.stringify(this.cartData))
        this.renderCart(this.cartData)
    }

    this.removeCartItem = function (id) {
        this.cartData = this.cartData.filter(cartItem => cartItem.id != id)
        this.renderCart(this.cartData)
        localStorage.setItem("cartData", JSON.stringify(this.cartData))
    }
}