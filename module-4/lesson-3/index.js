"use strict";


let sum = 11370;



let wrapper = $('.main');


$('.btn-success').addEventListener('click', () => {

    document.body.style.backgroundColor ="#000"
})









let shop = [


    {
        id: 1,
        name: "Iphone 14 pro max",
        brand: "Apple",
        img: "https://olcha.uz/image/700x700/products/2022-09-08/apple-iphone-14-pro-makh-128gb-gold-115998-0.jpeg",
        price: 1500,
        isActive: true
    },
    {
        id: 2,
        name: "Iphone 13 pro max",
        brand: "Apple",
        img: "https://olcha.uz/image/700x700/products/2021-09-24/apple-iphone-13-pro-max-512gb-blue-25301-0.jpeg",
        price: 1400,
        isActive: true


    },
    {
        id: 3,
        name: "Samsung galaxy s23 ultra",
        brand: "Samsung",
        img: "https://olcha.uz/image/700x700/products/d7IsGoneFt0XlAvbtKAG2JYXbtIvXb4gCYiICLc6Bpuag9j5cX4l7KReXAQu.jpg",
        price: 1500,
        isActive: true


    },
    {
        id: 4,
        name: "Samsung Galaxy A04e",
        brand: "Samsung",
        img: "https://olcha.uz/image/700x700/products/2022-12-20/samsung-galaxy-a04e-183609-0.jpeg",
        price: 240,
        isActive: true

    }, {
        id: 5,
        name: "Xiaomi 13 Lite (Global)",
        brand: "Xiaomi",
        img: "https://olcha.uz/image/700x700/products/wOsONunTJSTIQJfy5GvyqbL7tocohR84L138XjC9jn5Ed8ZSdabWj7gImK7f.jpg",
        price: 400,
        isActive: true


    }, {
        id: 6,
        name: "Honor X8a 6/128GB Titanium Silver",
        brand: "Honor",
        img: "https://olcha.uz/image/700x700/products/CNI3MC1fcbczh6CvLWTNEq7ZlJyj52nMLWo2FWXdhOded6dnjqlMClwTQm8X.jpg",
        price: 410,
        isActive: true


    }, {
        id: 7,
        name: "Nokia 8210 4G Blue",
        brand: "Nokia",
        img: "https://olcha.uz/image/700x700/products/2022-09-09/nokia-8210-4g-blue-116119-0.jpeg",
        price: 80,
        isActive: true


    }, {
        id: 8,
        name: "LG Exalt II VN370",
        brand: "LG",
        img: "https://olcha.uz/image/700x700/products/MkEPOhaAfD4KjY6Gf6XpIzywYw7F82OA7Y1jX1m8LMQy74Nghv86bPerCey4.jpg",
        price: 40,
        isActive: false

    }


]


let card = createElement('div', 'card', `   
<img src = "https://olcha.uz/image/700x700/products/2022-09-08/apple-iphone-14-pro-makh-128gb-gold-115998-0.jpeg" alt="iphone" class="card-img"> 
<div class="card-body">
        <h2 class="card-title fs-4"> Iphone 14 pro max </h2>
        <span class="bg-warning p-1 rounded-pill px-2">apple</span> 
          <p class="fw-bold my-3 fs-2"> 5 175 000 so 'm</p>
        <span class = "bg-success text-white p-1 rounded-pill px-2" > Sotuvda mavjud </span>
</div >
`);


let h1 = createElement('h1', "text-center", "lorem");
let span = createElement('span', 'px-3 py-2 bg-warning text-white', '12000 so\'m');
let div = createElement('div')

console.log(h1)
console.log(span)
console.log(div)
