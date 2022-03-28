// Globale Variables
let div = null;

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
    if (div !== null) {
      div.remove();
      div = null;
    }

    if (isValidHex(output.value)) {
      generateToastMessage(`${output.value} copied`);
    } else {
      alert("Invalid Colour Code");
    }
  });

  outputCode.addEventListener("keyup", function (e) {
    const colour = e.target.value;
    if (isValidHex(colour)) rootDiv.style.backgroundColor = colour;
  });
}
function generateHexColour() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

/**
 *
 * @param {String} colour
 */

function isValidHex(colour) {
  if (colour.length !== 7) return false;
  if (colour[0] !== "#") return false;

  colour = colour.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(colour);
}
