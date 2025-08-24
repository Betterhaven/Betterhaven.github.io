function loadHeaderFooter(transparent = false) {
  fetch("../HTML/header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("top-bar").innerHTML = html;
      if (transparent) {
      const nav = document.querySelector('nav'); // or 'nav' or '#top-bar'
      if (nav) nav.classList.add('transparent');}
    })
    .catch((err) => console.error("Header load failed:", err));
    }

