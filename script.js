let hamburger = document.querySelector(".hamburger");
let navbarLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

gsap.set("#one", {
  x: -250,
});

gsap.set("#two", {
  x: -250,
});

gsap.set("#three", {
  x: -250,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".col-8",
      toggleActions: "restart restart restart restart",
    },
  })
  .to("#one", {
    x: 0,
    opacity: 1,
  })
  .to("#two", {
    x: 0,
    opacity: 1,
  })
  .to("#three", {
    x: 0,
    opacity: 1,
  });
