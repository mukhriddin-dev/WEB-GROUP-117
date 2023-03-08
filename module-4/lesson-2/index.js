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

for (let i = 0; i < 100; i++) {
    let card = document.createElement("div");
    card.setAttribute("id", "text");
    card.classList.add("text-center", "bg-warning", "p-5", "rounded-5", "my-3");
    card.innerHTML = `<div class="p-4 shadow">
    
    <img src="http://picsum.photos/id/${
        i + 89
    }/400/400" alt="image ${i} ">
<strong>${
        i + 1
    }</strong> LOREM LOREM LOREM

    </div>`;

    wrapper.prepend(card);
}

// console.log(card)
