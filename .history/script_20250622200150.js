  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const title3 = document.getElementById("title3");

  const desc1 = document.getElementById("desc1");
  const desc2 = document.getElementById("desc2");
  const desc3 = document.getElementById("desc3");

  title1.addEventListener("click", () => {
    desc1.classList.toggle("show");
    desc2.classList.remove("show");
    desc3.classList.remove("show");
  });

  title2.addEventListener("click", () => {
    desc2.classList.toggle("show");
    desc1.classList.remove("show");
    desc3.classList.remove("show");
  });

  title3.addEventListener("click", () => {
    desc3.classList.toggle("show");
    desc1.classList.remove("show");
    desc2.classList.remove("show");
  });

  document.getElementById("desc3"); // ✅ as you requested
</script>
