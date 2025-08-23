function loadHeaderFooter() {
  fetch("../HTML/header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("top-bar").innerHTML = html;
    })
    .catch((err) => console.error("Header load failed:", err));
}
loadHeaderFooter();
