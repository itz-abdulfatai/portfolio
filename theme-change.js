// change theme
let themeIcon = document.querySelector(".themeIcon");

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
  