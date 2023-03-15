"use strict";

// let n = 0;
// do {
//     console.log(n)

//     n++;

// } while (n < 10)


// while (n < 10) {
//     n++;
//     console.log(n)
// }

// for (let i = 0; i < 1; i++) {
//     console.log(i)
// }


// function isName(arg1, arg2) {
//     console.log(arg1)
// }

// app('like')

// const app = function (a) {
//     return a+" say"
// }


// let b = app;

// console.log(app('salom'))


// b('hello world')

// console.log(text('hello world'))

// const text = (text="Hello") => " Mr Fergyuson "+text

// console.log(text('Goodbye'))

// Immediately invoked function expression

// higher order function

// .map

// .reduce

// .filter
// let str = "fqwegrtyujkl"

// function onLike(str) {
//     return function (str) {
//         return str.split('');
//     }
// }

// let newarr=onLike()


// (function () {
//     console.log("is working...");
// }())


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.slice(1,4))


// let app = "angular";
// console.log(app.split('a'))


// let arr = [];
// let arr2 = new Array();


// let obj = {

//     isName: "Diyorbek",
//     allInfo: function () {
//         console.log(this.isName)
//     }

// }


// obj.allInfo();

// let h1 = document.querySelector('h1'),
//     img=document.querySelector('img');

// h1.style.color = "red";
// h1.style.color = "green";

// console.log(h1.style)
// console.log(img.style)


//


// window.addEventListener('load', () => {
//     console.log("page fully loaded")
// })


// window.addEventListener('DOMContentLoaded', () => {
//     console.log("Reloaded DOM object")
// })


// setInterval(()=>{}, time , )
// let date = new Date();
// let newDate = date.setFullYear(2027)
// console.log(date.getFullYear())
// console.log(date.getDay())


function createElement(tagName, className, content) {

    let div = document.createElement(tagName);

    if (className) {
        div.setAttribute('class', className)

    }

    if (content) {
        div.innerHTML = content

    }


    return div
}


for (let i = 0; i < 50; i++) {
    let card = createElement('div', 'card', `<h1>Card ${i}</h1>`);
    console.log(card)
}


let title = createElement('h1');


function $(selector) {
    let element = document.querySelector(selector);

    return element

}

function $$(selector) {
    let element = document.querySelectorAll(selector);

    return element

}


console.log($('h1'))
console.log($('img'))


$('h1').addEventListener('click', (e) => {
    console.log(e.target)
})
