/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

window.onload = () => {
  main();
};

function main() {
  const rootDiv = document.getElementById("root");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    let changeColour = generateRGBColour();
    rootDiv.style.backgroundColor = changeColour;
  });
}
function generateRGBColour() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
