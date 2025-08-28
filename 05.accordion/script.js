document.addEventListener("DOMContentLoaded", function () {
  const asks = document.querySelectorAll(".ask");
  const answers = document.querySelectorAll(".answer");

  for (let ask of asks) {
    ask.addEventListener("click", toggleAnswer);
  }

  function toggleAnswer() {
    hideAllAnswers();
    const item = this.closest(".item");
    const answer = item.querySelector(".answer");
    answer.classList.toggle("hide");
  }

  function hideAllAnswers() {
    for (let answer of answers) {
      answer.classList.add("hide");
    }
  }
});
