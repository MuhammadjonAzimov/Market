const products = [
    {
        id: 1,
        title: "Non",
        price: 300
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
    }
}