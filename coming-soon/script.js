// Typed js


const typed = new Typed('.typedJs', {
    strings: ['...'],
    typeSpeed: 1000,
    backSpeed: 1000,
    backDelay: 600,
    loop:true,
    showCursor: false,


});

// navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  document.oncontextmenu = new Function("return false");