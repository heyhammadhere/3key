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

  // Nav Animations

gsap.from("#nav", {
  duration: 1,
  y: "-100%",    
  ease: "bounce"
});

gsap.from("#nav > *", {
  duration: 1,
  delay: 1,
  y: "-150%",  
  stagger: 0.25
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
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#home svg path,#home svg line,#home svg polyline,#home svg polygon,#home svg rect,#home svg circle",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  // Solutions Animations

  ScrollTrigger.create({
    trigger: "#solutions-01",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#solutions-01 svg path,#solutions-01 svg line,#solutions-01 svg polyline,#solutions-01 svg polygon,#solutions-01 svg rect,#solutions-01 svg circle,#solutions-01 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-01 svg path,#solutions-01 svg line,#solutions-01 svg polyline,#solutions-01 svg polygon,#solutions-01 svg rect,#solutions-01 svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-02",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#solutions-02 svg path,#solutions-02 svg line,#solutions-02 svg polyline,#solutions-02 svg polygon,#solutions-02 svg rect,#solutions-02 svg circle,#solutions-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-02 svg path,#solutions-02 svg line,#solutions-02 svg polyline,#solutions-02 svg polygon,#solutions-02 svg rect,#solutions-02 svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-03",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#solutions-03 svg path,#solutions-03 svg line,#solutions-03 svg polyline,#solutions-03 svg polygon,#solutions-03 svg rect,#solutions-03 svg circle,#solutions-03 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-03 svg path,#solutions-03 svg line,#solutions-03 svg polyline,#solutions-03 svg polygon,#solutions-03 svg rect,#solutions-01 svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-04",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#solutions-04 svg path,#solutions-04 svg line,#solutions-04 svg polyline,#solutions-04 svg polygon,#solutions-04 svg rect,#solutions-04 svg circle,#solutions-04 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-04 svg path,#solutions-04 svg line,#solutions-04 svg polyline,#solutions-04 svg polygon,#solutions-04 svg rect,#solutions-01 svg circle,#solutions svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  // Approach Animations

  ScrollTrigger.create({
    trigger: "#approach-01",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#approach-01 svg path,#approach-01 svg line,#approach-01 svg polyline,#approach-01 svg polygon,#approach-01 svg rect,#approach-01 svg circle,#approach-01 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#approach-01 svg path,#approach-01 svg line,#approach-01 svg polyline,#approach-01 svg polygon,#approach-01 svg rect,#approach-01 svg circle,#approach-01 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#approach-02",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#approach-02 svg path,#approach-02 svg line,#approach-02 svg polyline,#approach-02 svg polygon,#approach-02 svg rect,#approach-02 svg circle,#approach-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#approach-02 svg path,#approach-02 svg line,#approach-02 svg polyline,#approach-02 svg polygon,#approach-02 svg rect,#approach-02 svg circle,#approach-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#approach-03",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#approach-03 svg path,#approach-03 svg line,#approach-03 svg polyline,#approach-03 svg polygon,#approach-03 svg rect,#approach-03 svg circle,#approach-03 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#approach-03 svg path,#approach-03 svg line,#approach-03 svg polyline,#approach-03 svg polygon,#approach-03 svg rect,#approach-03 svg circle,#approach-03 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#approach-04",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#approach-04 svg path,#approach-04 svg line,#approach-04 svg polyline,#approach-04 svg polygon,#approach-04 svg rect,#approach-04 svg circle,#approach-04 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#approach-04 svg path,#approach-04 svg line,#approach-04 svg polyline,#approach-04 svg polygon,#approach-04 svg rect,#approach-04 svg circle,#approach-04 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  // Performances Animations

  ScrollTrigger.create({
    trigger: "#performances-01",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#performances-01 svg path,#performances-01 svg line,#performances-01 svg polyline,#performances-01 svg polygon,#performances-01 svg rect,#performances-01 svg circle,#performances-01 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#performances-01 svg path,#performances-01 svg line,#performances-01 svg polyline,#performances-01 svg polygon,#performances-01 svg rect,#performances-01 svg circle,#performances-01 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#performances-02",
    start: "top 80%",
    onEnter: () => {
      anime({
        targets:
          "#performances-02 svg path,#performances-02 svg line,#performances-02 svg polyline,#performances-02 svg polygon,#performances-02 svg rect,#performances-02 svg circle,#performances-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#performances-02 svg path,#performances-02 svg line,#performances-02 svg polyline,#performances-02 svg polygon,#performances-02 svg rect,#performances-02 svg circle,#performances-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
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
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#contact svg path,#contact svg line,#contact svg polyline,#contact svg polygon,#contact svg rect,#contact svg circle,#contact svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });
})();
