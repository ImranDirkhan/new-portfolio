"use strict";

// Mobile header interactions ------------------------------------------
//----------------------------------------------------------------------
const btn = document.getElementById("btn");
const nav = document.querySelector(".nav-menu-and-accounts");

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  nav.classList.toggle("hidden");
});
