const skillCard1 = document.querySelector(".skill-card-1");
const skillCard2 = document.querySelector(".skill-card-2");
const skillCard3 = document.querySelector(".skill-card-3");
const bigIcon1 = document.querySelector(".big-icon-1");
const bigIcon2 = document.querySelector(".big-icon-2");
const bigIcon3 = document.querySelector(".big-icon-3");
const textCard1 = document.querySelector(".text-card-1");
const textCard2 = document.querySelector(".text-card-2");
const textCard3 = document.querySelector(".text-card-3");
const textCardHeading1 = document.querySelector(".text-card-heading-1");
const textCardHeading2 = document.querySelector(".text-card-heading-2");
const textCardHeading3 = document.querySelector(".text-card-heading-3");
const textCardPara1 = document.querySelector(".text-card-para-1");
const textCardPara2 = document.querySelector(".text-card-para-2");
const textCardPara3 = document.querySelector(".text-card-para-3");
const caretUp1 = document.querySelector(".ph-caret-up-1");
const caretUp2 = document.querySelector(".ph-caret-up-2");
const caretUp3 = document.querySelector(".ph-caret-up-3");

const project = document.querySelector(".project");
const projectImageCont = document.querySelector(".project-image-cont");
const projectImage1 = document.getElementById("project-image-1");

// Set 1
skillCard1.addEventListener("mouseover", function () {
  bigIcon1.classList.add("big-icon-transformed");
  textCard1.classList.add("move-up");
  textCardPara1.classList.remove("hidden");
  caretUp1.style.transform = "scale(0)";
});
skillCard1.addEventListener("mouseleave", function () {
  bigIcon1.classList.remove("big-icon-transformed");
  textCard1.classList.remove("move-up");
  textCardPara1.classList.add("hidden");
  caretUp1.style.transform = "scale(1)";
});

// Set 2
skillCard2.addEventListener("mouseover", function () {
  bigIcon2.classList.add("big-icon-transformed");
  textCard2.classList.add("move-up");
  textCardPara2.classList.remove("hidden");
  caretUp2.style.transform = "scale(0)";
});
skillCard2.addEventListener("mouseleave", function () {
  bigIcon2.classList.remove("big-icon-transformed");
  textCard2.classList.remove("move-up");
  textCardPara2.classList.add("hidden");
  caretUp2.style.transform = "scale(1)";
});

// Set 3
skillCard3.addEventListener("mouseover", function () {
  bigIcon3.classList.add("big-icon-transformed");
  textCard3.classList.add("move-up");
  textCardPara3.classList.remove("hidden");
  caretUp3.style.transform = "scale(0)";
});
skillCard3.addEventListener("mouseleave", function () {
  bigIcon3.classList.remove("big-icon-transformed");
  textCard3.classList.remove("move-up");
  textCardPara3.classList.add("hidden");
  caretUp3.style.transform = "scale(1)";
});

// Animation on project
project.addEventListener("mouseover", function () {
  projectImageCont.style.backdropFilter = "blur(10px)";
  projectImage1.style.transform = "scale(0.95)";
  projectImage1.style.transition = "all 0.25s ease-in-out";
});

project.addEventListener("mouseleave", function () {
  projectImageCont.style.backdropFilter = "blur(10px)";
  projectImage1.style.transform = "scale(1)";
});
