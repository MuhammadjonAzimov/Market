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

const products = new Product(productsData)
const cart = new Cart()

renderProducts()
renderCart()