const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      smoother.scrollTo(target, true);
    }
  });
});

// animações com GSAP

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.1,
  effects: true,
});

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  effects: true,
});

gsap.from(".hero-conteudo", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".apresentacao-img", {
  scrollTrigger: {
    trigger: ".apresentacao-conteudo",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
  },
  opacity: 0,
  x: -50,
  y: 5,
});

gsap.from(".apresentacao-conteudo", {
  scrollTrigger: {
    trigger: ".apresentacao-conteudo",
    start: "top 80%",
    end: "bottom 80%",
    scrub: 1,
  },
  opacity: 0,
  x: 50,
  y: 5,
});

gsap.from(".produtos h2, .produtos p", {
  scrollTrigger: {
    trigger: ".produtos",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.set(".card", { opacity: 0, y: 60 });

gsap.to(".card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 90%",
  },
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
});

gsap.from(".sobre-conteudo", {
  scrollTrigger: {
    trigger: ".sobre",
    start: "top 70%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
});
