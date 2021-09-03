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

  // Home Animations

  ScrollTrigger.create({
    trigger: "#home",
    onEnter: () => {
      anime({
        targets:
          "#home svg path,#home svg line,#home svg polyline,#home svg polygon,#home svg rect,#home svg circle",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#home svg path,#home svg line,#home svg polyline,#home svg polygon,#home svg rect,#home svg circle",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });

  // Solutions Animations

  ScrollTrigger.create({
    trigger: "#solutions",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#solutions svg path,#solutions svg line,#solutions svg polyline,#solutions svg polygon,#solutions svg rect,#solutions svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions svg path,#solutions svg line,#solutions svg polyline,#solutions svg polygon,#solutions svg rect,#solutions svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });

  // Approach Animations

  ScrollTrigger.create({
    trigger: "#approach",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#approach svg path,#approach svg line,#approach svg polyline,#approach svg polygon,#approach svg rect,#approach svg circle,#approach svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#approach svg path,#approach svg line,#approach svg polyline,#approach svg polygon,#approach svg rect,#approach svg circle,#approach svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });

  // Performances Animations

  ScrollTrigger.create({
    trigger: "#performances",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#performances svg path,#performances svg line,#performances svg polyline,#performances svg polygon,#performances svg rect,#performances svg circle,#performances svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#performances svg path,#performances svg line,#performances svg polyline,#performances svg polygon,#performances svg rect,#performances svg circle,#performances svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });

  // Contact Animations

  ScrollTrigger.create({
    trigger: "#contact",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#contact svg path,#contact svg line,#contact svg polyline,#contact svg polygon,#contact svg rect,#contact svg circle,#contact svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#contact svg path,#contact svg line,#contact svg polyline,#contact svg polygon,#contact svg rect,#contact svg circle,#contact svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });
})();
