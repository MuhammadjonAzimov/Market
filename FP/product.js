const productsData = [
    {
        imgurl: "./images/non.jpg",
        id: 1,
        title: "Non",
        price: 3000
    },
    {
        imgurl: "./images/cola1.jpg",
        id: 2,
        title: "Cola",
        price: 10000
    },
    {
        imgurl: "./images/olma.jpg",
        id: 3,
        title: "Olma",
        price: 11500
    },
    {
        imgurl: "./images/uzum.jpg",
        id: 4,
        title: "Uzum",
        price: 7000
    },
    {
        imgurl: "./images/tuhum.jpg",
        id: 5,
        title: "Tuhum",
        price: 13000
    },
    {
        imgurl: "./images/мука.jpg",
        id: 6,
        title: "Un",
        price: 11400
    },
    {
        imgurl: "./images/banan.jpg",
        id: 7,
        title: "Banan",
        price: 15000
    },
    {
        imgurl: "./images/sok.jpg",
        id: 8,
        title: "Sok",
        price: 7900
    },
    {
        imgurl: "./images/makaron.jpg",
        id: 9,
        title: "Makaron",
        price: 9990
    },
    {
        imgurl: "./images/chips.jpg",
        id: 10,
        title: "Chips",
        price: 6490
    },
    {
        imgurl: "./images/yog.jpg",
        id: 11,
        title: "Yog'",
        price: 42000
    },
    {
        imgurl: "./images/saryog.jpg",
        id: 12,
        title: "Saryog'",
        price: 18490
    },
    {
        imgurl: "./images/kolbasa.jpg",
        id: 13,
        title: "Kolbasa",
        price: 49490
    },
    {
        imgurl: "./images/steyk.jpg",
        id: 14,
        title: "Steyk",
        price: 109990
    },
    {
        imgurl: "./images/sut.jpg",
        id: 15,
        title: "Sut",
        price: 11490
    }
]

function renderProducts(products) {
    const productsContainer = document.querySelector(".products-container")

    for (let product of products) {
        const div = document.createElement("div")
        div.classList.add("product")

        div.innerHTML = `
            <img class="product-img" src="${product.imgurl}" alt="">
            <h3>${product.title}</h3>
            <B>${product.price} so'm</b>
            <button onclick="addProductToCart(${product.id})" id="add-to-cart" data-product-id="${product.id}">Savatchaga qo'shish</button>
        `

        productsContainer.append(div)
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