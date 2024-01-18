let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


window.onscroll = () => {


  //   sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


ScrollReveal({
  // reset: true,
  distance: "50px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".nsvp", { origin: "bottom" });


ScrollReveal().reveal(
  ".other-counters, .finger-lift",
  { origin: "left" }
);

ScrollReveal().reveal(".secondcounter", { origin: "right" });



ScrollReveal().reveal(".contact-form", { origin: "bottom" });


// const nameInput = document.querySelector("#full-name");

// nameInput.setCustomValidity("kindly input full name (3 letters min)");
