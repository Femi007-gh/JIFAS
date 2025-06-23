const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");

const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");

const sign1 = document.getElementById("sign1");
const sign2 = document.getElementById("sign2");
const sign3 = document.getElementById("sign3");

title1.addEventListener("click", () => {
  desc1.classList.toggle("show");
  desc2.classList.remove("show");
  desc3.classList.remove("show");

  if (desc1.classList.contains("show")) {
    sign1.innerHTML = "–";
  } else {
    sign1.innerHTML = "+";
  }

  sign2.innerHTML = "+";
  sign3.innerHTML = "+";
});

title2.addEventListener("click", () => {
  desc2.classList.toggle("show");
  desc1.classList.remove("show");
  desc3.classList.remove("show");

  if (desc2.classList.contains("show")) {
    sign2.innerHTML = "–";
  } else {
    sign2.innerHTML = "+";
  }

  sign1.innerHTML = "+";
  sign3.innerHTML = "+";
});

title3.addEventListener("click", () => {
  desc3.classList.toggle("show");
  desc1.classList.remove("show");
  desc2.classList.remove("show");

  if (desc3.classList.contains("show")) {
    sign3.innerHTML = "–";
  } else {
    sign3.innerHTML = "+";
  }

  sign1.innerHTML = "+";
  sign2.innerHTML = "+";
});

document.getElementById("desc3");