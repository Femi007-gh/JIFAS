    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById("hamburger");
        const navContent = document.getElementById("nav-content");
        const closeBtn = document.getElementById("close-btn");

        function openMenu() {
          navContent.classList.add("show");
          hamburger.style.display = "none"; // hide ☰ while overlay open
        }

        function closeMenu() {
          navContent.classList.remove("show");
          hamburger.style.display = "block"; // restore ☰ when overlay closes
        }

        hamburger.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);

        window.addEventListener("resize", () => {
          if (window.innerWidth >= 769) {
            navContent.classList.remove("show"); // ensure overlay off on desktop
            hamburger.style.display = "none"; // hide ☰ on desktop
          } else {
            hamburger.style.display = navContent.classList.contains("show")
              ? "none"
              : "block";
          }
        });
      });