(() => {
  let hamburger = document.querySelector(".hamburger");
  let navLinks = document.querySelector(".nav-links");
  let links = navLinks.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
})();
