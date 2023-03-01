"use strict";

let login = document.querySelector("#login"),
  message = document.querySelector("#message"),
  username = document.querySelector("#username"),
  password = document.querySelector("#password"),
  submitBtn = document.querySelector("#submit"),
  region = document.querySelector("#region"),
  btn = document.querySelector("button");

// radio = document.querySelector("#radio");

// ------------ KEYBOARD EVENTS ----------------///

// username.addEventListener("input", (evt) => {

//     let text = evt.target.value;
//     message.innerHTML = text;

//     if (text.length >= 8) {
//       evt.target.style.border = "2px solid green";
//     } else {
//       evt.target.style.border = "2px solid crimson";
//     }
// //   if (evt.key.toLowerCase() === "enter") {
// //     if (text.length >= 8) {
// //       evt.target.style.border = "2px solid green";
// //     } else {
// //       evt.target.style.border = "2px solid crimson";
// //     }
// //   }
// });

// region.addEventListener("change", (evt) => {
//   console.log(evt.target.value)

// });

// const submitForm = () => {
//   let user = {
//     username: username.value,
//     password: password.value,
//   };

//   console.log(user);
// };

// btn.addEventListener("click", () => {
//   submitForm();
// });


// window.addEventListener('scroll', (e) => { 
//     // console.log(e)
//     console.log(window.scrollY)
//     if (window.scrollY > 141) {
//         document.body.style.background="crimson"
//     } else {
//          document.body.style.background = "#fff";
//     }
//      if (window.scrollY > 341) {
//        document.body.style.background = "yellow";
//      }
// })



window.addEventListener('DOMContentLoaded', () => { 
    console.log("document loaded")

})

window.addEventListener("load", () => {
  console.log("document loaded 100%");
});



