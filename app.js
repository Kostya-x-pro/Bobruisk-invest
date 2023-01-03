window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#nav__list").classList.toggle("is-active");
  });
});
