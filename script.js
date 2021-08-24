(() => {
  let hamburger = document.querySelector("div.hamburger");
  let navLinks = document.querySelector("ul.nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
})();
