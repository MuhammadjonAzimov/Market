const productsData = [
    {
        id: 1,
        title: "Non",
        price: 3000
    },
    {
        id: 2,
        title: "Cola",
        price: 10000
    },
    {
        id: 3,
        title: "Olma",
        price: 15000
    },
    {
        id: 4,
        title: "Uzum",
        price: 7000
    }
]

function renderProducts(products) {
    const productsContainer = document.querySelector(".products-container")

    for (let product of products) {
        const div = document.createElement("div")
        div.classList.add("product")

        div.innerHTML = `
            <h3>${product.title}</h3>
            <B>${product.price}</b>
            <button onclick="addProductToCart(${product.id})" id="add-to-cart" data-product-id="${product.id}">Savatchaga qo'shish</button>
        `

        productsContainer.appendChild(div)
    }
}

function addProductToCart(id) {
    const selectedProduct = productsData.filter(product => product.id == id)
    const selectedProductPrice = selectedProduct[0].price
    const selectedProductTitle = selectedProduct[0].title
    const selectedProductId = selectedProduct[0].id
    const hasSameProduct = cartData.filter(cartItem => cartItem.productId == id).length > 0

    if (hasSameProduct) return alert("Siz buni savatga solgansiz")

    cartData.push({
        id: cartData[cartData.length - 1]?.id + 1 || 1,
        productId: selectedProductId,
        title: selectedProductTitle,
        productprice: selectedProductPrice,
        quantity: 1,
        totalPrice: selectedProductPrice
    })

    localStorage.setItem("cartData", JSON.stringify(cartData))

    renderCart(cartData)
}

renderProducts(productsData)