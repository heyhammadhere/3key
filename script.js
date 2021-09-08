(() => {
  const navbar = document.getElementById("navbar");
  const navbarToggle = navbar.querySelector(".navbar-toggle");

  function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-expanded", "false");
  }

  navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
      closeMobileNavbar();
    } else {
      openMobileNavbar();
    }
  });

  const navbarMenu = navbar.querySelector("#navbar-menu");
  const navbarLinksContainer = navbar.querySelector(".navbar-links");

  navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
  });

  navbarMenu.addEventListener("click", closeMobileNavbar);

  // Nav Animations

  gsap.from("#navbar", {
    duration: 1,
    y: "-100%",
    ease: "bounce",
  });

  gsap.from("#navbar > *", {
    duration: 1,
    delay: 1,
    y: "-150%",
    stagger: 0.25,
  });

  let navbarTrigger = document.querySelector("#navbar");

  ScrollTrigger.create({
    trigger: "#home",
    onEnter: () => {
      navbarTrigger.classList.add("bg-transparent");
    },
    onLeave: ()=>{
      navbarTrigger.classList.remove("bg-transparent");
    },
    onEnterBack: () => {
      navbarTrigger.classList.add("bg-transparent");
    },
  });
  // Home Animations

  ScrollTrigger.create({
    trigger: "#home",
    onEnter: () => {
      anime({
        targets: "#home svg path.sol,#home svg path.appr,#home svg path.perf",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
      gsap.from("#home-sol,#home-appr,#home-perf", {
        delay: 0.5,
        opacity: 0,
        stagger: 0.5,
      });
    },
    onEnterBack: () => {
      anime({
        targets: "#home svg path.sol,#home svg path.appr,#home svg path.perf",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
      gsap.from("#home-sol,#home-appr,#home-perf", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
      });
    },
  });

  document
    .getElementById("home-perf")
    .addEventListener("mouseenter", anim_performance);
  document
    .getElementById("home-perf")
    .addEventListener("mouseleave", anim_performance_stop);

  async function anim_performance() {
    document.getElementById("performance-trail").classList.add("draw");
    document
      .getElementById("performance-circle")
      .classList.remove("display-none");
  }

  async function anim_performance_stop() {
    document.getElementById("performance-trail").classList.remove("draw");
    document.getElementById("performance-circle").classList.add("display-none");
  }

  document
    .getElementById("home-sol")
    .addEventListener("mouseenter", anim_solution);
  document
    .getElementById("home-sol")
    .addEventListener("mouseleave", anim_solution_stop);

  async function anim_solution() {
    document.getElementById("solution-trail").classList.add("draw");
    document.getElementById("solution-circle").classList.remove("display-none");
  }

  async function anim_solution_stop() {
    document.getElementById("solution-trail").classList.remove("draw");
    document.getElementById("solution-circle").classList.add("display-none");
  }

  document
    .getElementById("home-appr")
    .addEventListener("mouseenter", anim_approach);
  document
    .getElementById("home-appr")
    .addEventListener("mouseleave", anim_approach_stop);

  async function anim_approach() {
    document.getElementById("approach-trail").classList.add("draw");
    document.getElementById("approach-circle").classList.remove("display-none");
  }

  async function anim_approach_stop() {
    document.getElementById("approach-trail").classList.remove("draw");
    document.getElementById("approach-circle").classList.add("display-none");
  }

  // Solutions Animations

  ScrollTrigger.create({
    trigger: "#solutions-01",
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
    onEnter: () => {
      anime({
        targets:
          "#solutions-02 svg path,#solutions-02 svg line,#solutions-02 svg polyline,#solutions-02 svg polygon,#solutions-02 svg rect,#solutions-02 svg circle,#solutions-02 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
      gsap.from("#lyra-text", {
        duration: 1,
        x: "200%",
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
      gsap.from("#lyra-text", {
        duration: 1,
        x: "200%",
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-03",
    onEnter: () => {
      anime({
        targets:
          "#solutions-03 svg path,#solutions-03 svg line,#solutions-03 svg polyline,#solutions-03 svg polygon,#solutions-03 svg rect,#solutions-03 svg circle,#solutions-03 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
      gsap.from(".key-text", {
        duration: 1,
        x: "500%",
        stagger: 0.5,
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
      gsap.from(".key-text", {
        duration: 1,
        x: "500%",
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-04",
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

  ScrollTrigger.create({
    trigger: "#solutions-05",
    onEnter: () => {
      anime({
        targets:
          "#solutions-05 svg path,#solutions-05 svg line,#solutions-05 svg polyline,#solutions-05 svg polygon,#solutions-05 svg rect,#solutions-05 svg circle,#solutions-05 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-05 svg path,#solutions-05 svg line,#solutions-05 svg polyline,#solutions-05 svg polygon,#solutions-05 svg rect,#solutions-05 svg circle,#solutions-05 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-06",
    onEnter: () => {
      anime({
        targets:
          "#solutions-06 svg path,#solutions-06 svg line,#solutions-06 svg polyline,#solutions-06 svg polygon,#solutions-06 svg rect,#solutions-06 svg circle,#solutions-06 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-06 svg path,#solutions-06 svg line,#solutions-06 svg polyline,#solutions-06 svg polygon,#solutions-06 svg rect,#solutions-06 svg circle,#solutions-06 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  ScrollTrigger.create({
    trigger: "#solutions-07",
    onEnter: () => {
      anime({
        targets:
          "#solutions-07 svg path,#solutions-07 svg line,#solutions-07 svg polyline,#solutions-07 svg polygon,#solutions-07 svg rect,#solutions-07 svg circle,#solutions-07 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
    onEnterBack: () => {
      anime({
        targets:
          "#solutions-07 svg path,#solutions-07 svg line,#solutions-07 svg polyline,#solutions-07 svg polygon,#solutions-07 svg rect,#solutions-07 svg circle,#solutions-07 svg ellipse",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500,
      });
    },
  });

  // Approach Animations

  ScrollTrigger.create({
    trigger: "#approach-01",
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

  // Performances Animations

  ScrollTrigger.create({
    trigger: "#performances-01",
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

  $(".appr-seamless").hover(
    function () {
      $(".seamless").show();
    },
    function () {
      $(".seamless").hide();
    }
  );

  $(".appr-secure").hover(
    function () {
      $(".secure").show();
    },
    function () {
      $(".secure").hide();
    }
  );

  $(".appr-scalable").hover(
    function () {
      $(".scalable").show();
    },
    function () {
      $(".scalable").hide();
    }
  );
})();
