document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const colorInput = document.getElementById("colorInput");

  function changeHeaderColor() {
    const color = colorInput.value;
    header.style.color = color;
    colorInput.value = "";
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    changeHeaderColor();
  });
});
