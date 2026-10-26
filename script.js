// mobile menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// active nav link on scroll + sticky header
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const current = document.querySelector(`header nav a[href="#${id}"]`);
      if (current) current.classList.add("active");
    }
  });

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({ distance: "60px", duration: 1500, delay: 150 });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .cards-container, .timeline-item, .contact form, .contact-info",
  { origin: "bottom", interval: 100 }
);
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

// typed text
new Typed(".multiple-text", {
  strings: [
    "Content Creator",
    "Social Media Manager",
    "Brand Collaborator",
    "Virtual Assistant",
    "Computer Science Student",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
