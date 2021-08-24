let hamburger = document.querySelector(".hamburger");
let navbarLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
