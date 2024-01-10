let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let themeIcon = document.querySelector(".themeIcon");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Digital Marketer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 600,
  loop: true,
});

// change theme

window.addEventListener("load", () => {
  const isWindowsDark = window.matchMedia("(prefers-color-scheme: dark)");

  console.log(isWindowsDark.matches);

  switch (isWindowsDark.matches) {
    case true:
      // console.log("is in dark mode");
      body.classList.add("darktheme");
      body.classList.remove("lighttheme");
      themeIcon.classList.add("bxs-brightness-half");
      themeIcon.classList.remove("bx-brightness-half");

      break;
    case false:
      // console.log("is in light mode");
      body.classList.add("lighttheme");
      body.classList.remove("darktheme");
      themeIcon.classList.add("bx-brightness-half");
      themeIcon.classList.remove("bxs-brightness-half");
  }

})



const body = document.querySelector("body");

function float() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");

  console.log(isDark.matches);

  switch (isDark.matches) {
    case true:
      // console.log("is in dark mode");
      body.classList.toggle("lighttheme");
      body.classList.toggle("darktheme");
      themeIcon.classList.toggle("bxs-brightness-half");
      themeIcon.classList.toggle("bx-brightness-half");

      break;
    case false:
      // console.log("is in light mode");
      body.classList.toggle("darktheme");
      body.classList.toggle("lighttheme");
      themeIcon.classList.toggle("bxs-brightness-half");
      themeIcon.classList.toggle("bx-brightness-half");
  }
}
