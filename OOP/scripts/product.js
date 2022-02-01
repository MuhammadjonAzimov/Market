const Product = function (productsData) {
    this.productsContainer = document.querySelector(".products-container")
    this.productsData = productsData

    this.renderProducts = function () {
        for (let product of this.productsData) {
            const div = document.createElement("div")
            div.classList.add("product")

            div.innerHTML = `
                <img class="product-img" src="${product.imgurl}" alt="">
                <h3>${product.title}</h3>
                <B>${product.price} so'm</b>
                <button onclick="addProductToCart(${product.id})" id="add-to-cart" data-product-id="${product.id}">Savatchaga qo'shish</button>
            `
            this.productsContainer.append(div)
        }

        this.addProductToCart = function (id) {
            const selectedProduct = productsData.filter(product => product.id == id)
            const selectedProductPrice = selectedProduct[0].price
            const selectedProductTitle = selectedProduct[0].title
            const selectedProductId = selectedProduct[0].id
            const hasSameProduct = cart.cartData.filter(cartItem => cartItem.productId == id).length > 0

            if (hasSameProduct) return alert("Siz buni savatga solgansiz")

            cart.cartData.push({
                id: cart.cartData[cart.cartData.length - 1]?.id + 1 || 1,
                productId: selectedProductId,
                title: selectedProductTitle,
                productprice: selectedProductPrice,
                quantity: 1,
                totalPrice: selectedProductPrice
            })

            localStorage.setItem("cartData", JSON.stringify(cart.cartData))

            renderCart(cart.cart.cartData)
        }
    }
}