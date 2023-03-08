"use strict";

// let text = document.querySelector('.text'),
//     btnSucces = document.querySelector('.btn-primary'),
//     btnDanger = document.querySelector('.btn-danger'),
//     btnWarning = document.querySelector('.btn-warning');

// btnSucces.addEventListener('click', () => {
//     text.classList.add('rounded-pill');
//     console.log(text.classList)

// })

// btnDanger.addEventListener('click', () => {
//     text.classList.remove('rounded-pill');
//     console.log(text.classList.contains('bg-success'));

// })

// btnWarning.addEventListener('click', () => {

//     if (text.classList.contains('rounded-pill')) {
//         text.classList.remove('rounded-pill');
//     } else {
//         text.classList.add('rounded-pill');
//     }

// })

// btnWarning.addEventListener('click', () => {

//     text.classList.toggle('rounded-pill')

// })

// let card = document.querySelector('.card');

// console.log(new Date())
// const date = new Date();
// console.log(date.getDate()) // bugungi sana
// console.log(date.getDay()) // bugungi hafta kuni
// console.log(date.getFullYear()) // yil
// console.log(date.getMonth()) // oy
// console.log(date.getHours()) // soat
// console.log(date.getMinutes()) // daqiqa
// console.log(date.getSeconds()) // soniya

// console.log(date.getTimezoneOffset())
// console.log(date.getTime() / 1000 / 60 / 60 / 24 / 30 / 12)

// setInterval(() => {
//     let month = [
//         'jan',
//         'feb',
//         'mar',
//         'apr',
//         'may',
//         'jun',
//         'jul',
//         'aug',
//         'sep',
//         'oct',
//         'nov',
//         'dec'
//     ];
//     let week = [
//         'sunday',
//         'monday',
//         'tuesday',
//         'wednesday',
//         'thursday',
//         'friday',
//         'saturday'
//     ];

//     let date = new Date();
//     card.innerHTML = `

//      <h1 class="time"> ${
//         date.getHours()
//     }:${
//         date.getMinutes()
//     }:${
//         date.getSeconds()
//     }</h1>
// <h2 h2 class = "text-center text-success" > ${
//         date.getFullYear()
//     } - ${
//         month[date.getMonth()]
//     } - ${
//         date.getDate()
//     } - ${
//         week[date.getDay()]
//     }
// </h2>

//     `

// }, 1000)

// =========================== DYNAMIC ELEMENTS =========================//

let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 100; i++) {
//     let card = document.createElement("div");
//     card.setAttribute("id", "text");
//     card.classList.add("text-center", "bg-warning", "p-5", "rounded-5", "my-3");
//     card.innerHTML = `<div class="p-4 shadow">

//     <img src="http://picsum.photos/id/${
//         i + 89
//     }/400/400" alt="image ${i} ">
// <strong>${
//         i + 1
//     }</strong> LOREM LOREM LOREM

//     </div>`;

//     wrapper.prepend(card);
// }

// console.log(card)


let news = [

    {
        id: 1,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/321/400/360"

    },

    {
        id: 2,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/421/400/360"

    },


    {
        id: 3,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/521/400/360"

    },
    {
        id: 4,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/121/400/360"

    }, {
        id: 5,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/321/400/360"

    }, {
        id: 6,
        title: "lorem ipsum dolor sit ",
        text: " lorem  lorem ipsum dolor sit lorem ipsum dolor sit lorem lore lorem ipsum dolor sit lorem ipsum dolor",
        img: "https://picsum.photos/id/721/400/360"

    }


];


news.forEach((item, i) => {

    let card = document.createElement('div');

    card.setAttribute('class', 'd-flex shadow w-100 my-4');

    card.innerHTML = `

       <img src="${
        item.img
    }" alt="${
        item.title
    }"/>

       <div class="card-body p-4">
          <h2 class="fw-bold" >${
        item.title
    }</h2>

          <p class="text-muted">
             ${
        item.text
    }
          </p>
       </div>


    `;


    wrapper.appendChild(card);
})


let arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
];


let newArr = [];


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     newArr.push(arr[i]+2)
// }

console.log(newArr)

arr.forEach((index) => {
    newArr.push(index * 2)
})

console.log(newArr)


// function create() {
//     let a = 10;

//     return a*100
// }

// / pure function


// impure function


// let data = ['a', 'b', 'c', 'd', 'e'];

// function impure(letter) {
//     letter.push('f');

//     return letter;
// }


// impure(data)
