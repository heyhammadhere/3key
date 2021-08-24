let hamburger = document.querySelector(".hamburger");
let navbarLinks = document.querySelector(".navbar-links");
let links = document.querySelectorAll(".navbar-links a");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

links.forEach((_) => {
  _.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});

gsap.set("#solutions h1", {
  y: -100,
  opacity: 0,
});

gsap.set("#upper", {
  x: 250,
  opacity: 0,
});

gsap.set("#solutions h4", {
  y: -100,
  opacity: 0,
});

gsap.set("#lower", {
  x: 250,
  opacity: 0,
});

gsap.set("#one", {
  x: -250,
  opacity: 0,
});

gsap.set("#two", {
  x: -250,
  opacity: 0,
});

gsap.set("#three", {
  x: -250,
  opacity: 0,
});

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#one",
    toggleActions: "restart reverse restart reverse",
  },
  x: 0,
  opacity: 1,
  duration: 2,
});

gsap.to("#two", {
  scrollTrigger: {
    trigger: "#two",
    toggleActions: "restart reverse restart reverse",
  },
  x: 0,
  opacity: 1,
  duration: 2,
});

gsap.to("#three", {
  scrollTrigger: {
    trigger: "#three",
    toggleActions: "restart reverse restart reverse",
  },
  x: 0,
  opacity: 1,
  duration: 2,
});

gsap.to("#solutions h1", {
  scrollTrigger: {
    trigger: "#solutions h1",
    toggleActions: "restart reverse restart reverse",
  },
  y: 0,
  opacity: 1,
  duration: 1,
});

gsap.to("#upper", {
  scrollTrigger: {
    trigger: "#upper",
    toggleActions: "restart reverse restart reverse",
  },
  x: 0,
  opacity: 1,
  duration: 1,
});

gsap.to("#solutions h4", {
  scrollTrigger: {
    trigger: "#solutions h4",
    toggleActions: "restart reverse restart reverse",
  },
  y: 0,
  opacity: 1,
  duration: 1,
});

gsap.to("#lower", {
  scrollTrigger: {
    trigger: "#lower",
    toggleActions: "restart reverse restart reverse",
  },
  x: 0,
  opacity: 1,
  duration: 1,
});

gsap.from("#approach h4", {
  scrollTrigger: {
    trigger: "#approach h4",
    toggleActions: "restart reverse restart reverse",
  },
  x: -100,
  opacity: 0,
  stagger: 0.25,
});

gsap.from("#approach h3", {
  scrollTrigger: {
    trigger: "#approach h3",
    toggleActions: "restart reverse restart reverse",
  },
  y: -100,
  opacity: 0,
  duration: 1,
});

gsap.from("#approach p", {
  scrollTrigger: {
    trigger: "#approach p",
    toggleActions: "restart reverse restart reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1,
});
