"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalCross = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

document.addEventListener("keydown", function (event) {
    console.log(event);
if(event.code === "Enter" && !modal.classList.contains("hidden")){
        closeModal();
}

});

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", openModal);
}
closeModalCross.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
