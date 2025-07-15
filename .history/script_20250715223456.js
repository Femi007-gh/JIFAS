const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const navContent = document.getElementById("nav-content");

hamburger.onclick = function () {
  navContent.classList.add("show");
  hamburger.style.display = "none";
};

closeBtn.onclick = function () {
  navContent.classList.remove("show");
  hamburger.style.display = "block";
};

window.onresize = function () {
  if (window.innerWidth >= 980) {
    navContent.classList.remove("show");
    hamburger.style.display = "none";
  } else {
    if (!navContent.classList.contains("show")) {
      hamburger.style.display = "block";
    }
  }
};