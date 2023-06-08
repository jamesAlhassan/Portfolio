// TOGGLE
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("hide-preloader");
  }, 3000);
});
