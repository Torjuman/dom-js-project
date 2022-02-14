window.onload = () => {
  main();
};

function main() {
  const rootDiv = document.getElementById("root");
  const outputCode = document.getElementById("output");
  const btn = document.getElementById("btn");
  const copyBtn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    let changeColour = generateHexColour();
    rootDiv.style.backgroundColor = changeColour;
    outputCode.value = changeColour;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(outputCode.value);
  });
}
function generateHexColour() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
