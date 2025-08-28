document.addEventListener("DOMContentLoaded", function () {
  const alertSome = document.querySelector(".alertSome");
  const alertOther = document.querySelector(".alertOther");
  const addRandomColor =   document.querySelector('.addRandomColor');
  const listColors = document.querySelector('.colorList');

  const colors = ["red", "green", "blue"];
  listColorsHtml();

  addRandomColor.addEventListener("click", function(){
    const newColor = generateRandomColor();
    colors.push(newColor);
    console.log(`Added new color: ${newColor}`); 
    listColorsHtml();
  });

  alertSome.addEventListener("click", setRandomColor);
  alertOther.addEventListener("mouseenter", setRandomColor);

  function setRandomColor() {
    const randomColor = colors[rand(colors.length)];
    this.style.backgroundColor = randomColor;
  }

  function rand(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRandomColor() {
    const r = rand(256);
    const g = rand(256);
    const b = rand(256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function listColorsHtml(){
    listColors.innerHTML = colors.map(color => `<li style="background: ${color};">${color}</li>`).join('');
  }
});
