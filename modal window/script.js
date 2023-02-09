"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");

const btnopenmodal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnclosemodal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e);
});
