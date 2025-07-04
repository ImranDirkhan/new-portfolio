"use strict";

const contactCard = document.querySelector(".contact-card");
const contactCardArrow = document.querySelector(".contact-card-arrow");

contactCard.addEventListener("mouseover", function () {
  contactCardArrow.classList.add("arrow-animate");
});
contactCard.addEventListener("mouseleave", function () {
  contactCardArrow.classList.remove("arrow-animate");
});

// Mobile header interactions ------------------------------------------
//----------------------------------------------------------------------
const btn = document.getElementById("btn");
const nav = document.querySelector(".nav-menu-and-accounts");

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  nav.classList.toggle("hidden");
});
