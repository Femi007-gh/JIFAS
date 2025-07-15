  document.addEventListener("DOMContentLoaded", () => {
      const hamburger = document.getElementById("hamburger");
      const closeBtn = document.getElementById("close-btn");
      const navContent = document.getElementById("nav-content");

      function openMenu() {
        navContent.classList.add("show");
        hamburger.style.display = "none";
      }

      function closeMenu() {
        navContent.classList.remove("show");
        hamburger.style.display = "block";
      }

      hamburger.addEventListener("click", openMenu);
      closeBtn.addEventListener("click", closeMenu);

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
          navContent.classList.remove("show");
          hamburger.style.display = "none";
        } else {
          if (!navContent.classList.contains("show")) {
            hamburger.style.display = "block";
          }
        }
      });
    });