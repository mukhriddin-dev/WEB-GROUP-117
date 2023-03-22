"use strict";


// shalow copy

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr;

// arr2.push(11);


// deep copy

// 2-

// let arr2 = arr.map((item)=> item)

// 1-

// for(let i = 0; i < arr.length; i++){
//     arr2.push(arr[i]);
// }


// arr2.push(11)


// console.log("orginal", arr)
// console.log('copy', arr2)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [one, two, three, four, five, six, seven] = arr;


// console.log(arr[6])
// console.log(seven)


// let programming = ['javaScript', 'php', 'python', 'c', 'swift', 'unity', 'java'];

// const arr2 = [...programming,'.NET']

// arr2.push('.NET')

// console.log(programming)

// console.log(arr2)


// let [web, web2, ai, ...gaming] = programming;

// console.log(ai, web, gaming)


// function app(...c) {
//     console.log( c)


//     c.forEach((item) => {
//         if (item % 2 == 0) {
//             console.log(item)
//         }
//     })
// }


// app(1,2,3,4,5,6,7,8,9)


// let obj = {
//     name: "NAJOT TA'LIM",
//     age: 4,
//     branches: ["XADRA", "CHIMBOY", "CHILONZOR", "FARG'ONA"],
//     isOpen: true,
// }

// // shalow cloned object

// let obj2 = obj;

// obj2.isActive = true;

// console.log(obj)
// console.log(obj2)

// // deep clone

// //1.

// const obj3 = Object.assign({}, obj);
// obj3.size = 'large';
// console.log(obj3);


// // 2.

// const obj4 = JSON.parse( JSON.stringify(obj) );
// obj4.address = "Uzbekistan";


// console.log(obj4)

// // 3.


// const obj5={...obj, age:5}


// console.log(obj5)


// let obj = {
//     name: "NAJOT TA'LIM",
//     age: 4,
//     branches: [
//         "XADRA", "CHIMBOY", "CHILONZOR", "FARG'ONA"
//     ],
//     isOpen: true,
//     branch: {
//         xadra: {
//             name: "Xadra NT",
//             rooms: {
//                 amazon: {
//                     size: "large"
//                 },
//                 github: {
//                     size: 'samll'
//                 }
//             }

//         }
//     }
// }

// const {
//     branch: {
//         xadra: {
//             rooms: {
//                 ...rooms
//             }
//         }
//     }
// } = obj;

// console.log(rooms)


// console.log(obj['name'])
// console.log(obj.name)


// const {
//     age,
//     name,
//     ...ok
// } = obj;


// console.log(name, age, ok)


// this keyword !


// console.log(this)


// function test() {
//     console.log(this)
// }

// const test2 = () => {
//     console.log(this)
// }


// test()
// test2()

// const obj = {

//     status: 404,
//     info: function () {
//         console.log(this)
//     }
// }

// obj.info();


// const calc = {

//     a: 12,
//     b: 23,

//     add: function () {
//         console.log(this.a + this.b)
//     },

//     minus: function () {
//         console.log(this.a - this.b)
//     }

// }


// calc.add()

// call , applay , bind


setTimeout(() => {

    for (let i = 0; i < 10; i++) {
        console.log("time" + i)
    }

    setTimeout(() => {
        setTimeout(() => {
            console.log("step 3")
            setTimeout(() => {
                console.log(OK)
            },1000)
        }, 1000)    
        console.log("step 2")
    }, 1000)

}, 1000)


console.log("coffe")
