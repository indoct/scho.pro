const back2Top = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back2Top.style.display = "block";
  } else {
    back2Top.style.display = "none";
  }
}
back2Top.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const navbar = document.getElementById("menu");

// window.addEventListener("resize", function () {
//   if (window.matchMedia("(min-width: 992px)").matches) {
//     navbar.classList.remove("fixed-top");
//   } else {
//     navbar.classList.add("fixed-top");
//   }
// });
