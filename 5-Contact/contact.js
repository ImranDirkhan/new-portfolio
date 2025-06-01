"use strict";

const contactCard = document.querySelector(".contact-card");
const contactCardArrow = document.querySelector(".contact-card-arrow");

contactCard.addEventListener("mouseover", function () {
  contactCardArrow.classList.add("arrow-animate");
});
contactCard.addEventListener("mouseleave", function () {
  contactCardArrow.classList.remove("arrow-animate");
});
