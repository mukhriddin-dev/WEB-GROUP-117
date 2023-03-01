"use strict";

let box = document.querySelector(".box");

// box.style.cssText =
//   "background-color:#f3f3f;  width:300px; height:500px; box-shadow: 0 0  10px 0 silver; margin: 0 auto; color:red; padding: 30px";
// box.textContent =
//   "lorem Ipsimata Lorem Ipsum sfjksejflew ndfnjvlkjsehalfkelbsuwdfQWIh ";

// el.parentNode ---> elementni otasi
// el.nextElementSibling ---> keyingi element
// el.prevElementSibling ---> oldingi element
// textContent -> element ichidagi matlar
// innerHTML / innerText ->  element ichidagi HTML taglar / text

function hideBox(message) {
  box.style.display = "none";
  console.log("box hidden" + message);
}

// box.onclick = function () {
//     hideBox("sms")
//     document.body.style.backgroundColor = "red";
// }

// clcik
// dblclick
// mouseover
// mouseout
// mouseup
// mousedown

// box.addEventListener("mousedown", (e) => {
//   console.log(e.target);
//   console.log("box clicked");
//   box.style.opacity = "0";
// });

window.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  box.style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
});
