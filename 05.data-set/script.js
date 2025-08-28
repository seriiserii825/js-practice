document.addEventListener("DOMContentLoaded", function () {
  const li = document.querySelectorAll("ul li");

  for (let el of li) {
    el.addEventListener("click", setElementActive);
  }

  function setElementActive() {
    const color = this.dataset.color;
    this.style.color = color;
  }
});
