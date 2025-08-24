function loadHeaderFooter(transparent = false, animate=false) {
  fetch("../HTML/header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("top-bar").innerHTML = html;
      if (transparent) {
      const nav = document.querySelector('nav'); 
      if (nav) nav.classList.add('transparent');}
      if (animate) {
        const nav = document.querySelector('nav'); 
        if (nav) nav.classList.add('slide-in');
      }
    })
    .then(() => {
    document.body.style.animation = "fadeIn 1s forwards";
    })
    .catch((err) => console.error("Header load failed:", err));
    }

