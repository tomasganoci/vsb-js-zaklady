"use strict";

let nadpis = document.querySelector(".nadpis");
let buttonHEX = document.querySelector(".buttonHEX");
let buttonRGB = document.querySelector(".buttonRGB");

const nahodneCislo256 = () => Math.trunc(Math.random() * 256);

function zmenaBarvy(typ) {
  if (typ === "HEX") {
    const r = nahodneCislo256().toString(16).padStart(2, "0");
    const g = nahodneCislo256().toString(16).padStart(2, "0");
    const b = nahodneCislo256().toString(16).padStart(2, "0");
    var barva = `#${r}${g}${b}`;
  } else {
    const r = nahodneCislo256();
    const g = nahodneCislo256();
    const b = nahodneCislo256();
    var barva = `rgb(${r},${g},${b})`;
  }
  document.body.style.backgroundColor = barva;
  nadpis.innerHTML = `COLOR: ${barva}`;
}
buttonHEX.addEventListener("click", () => zmenaBarvy("HEX"));
buttonRGB.addEventListener("click", () => zmenaBarvy("RGB"));

//Původně napsaný kód před refaktorováním
// function zmenaBarvyHEX() {
//     let barvaHEX = `#${nahodneCisloHex()}${nahodneCisloHex()}${nahodneCisloHex()}`;
//     document.body.style.backgroundColor = barvaHEX;
//     nadpis.innerHTML = `COLOR: ${barvaHEX}`;
//   }
// function zmenaBarvyRGB() {
//   let barvaRGB = `rgb(${nahodneCislo256()},${nahodneCislo256()},${nahodneCislo256()})`;
//   document.body.style.backgroundColor = barvaRGB;
//   nadpis.innerHTML = `COLOR: ${barvaRGB}`;
// }

// function nahodneCisloHex() {
//   return nahodneCislo256().toString(16).padStart(2, "0");
// }
// function nahodneCislo256() {
//   return Math.trunc(Math.random() * 256);
// }
