// Global Varialbes
let div = null;

window.onload = () => {
  main();
};

function main() {
  const rootDiv = document.getElementById("rootDiv");
  const outputCode = document.getElementById("outputCode");
  const copyBtn = document.getElementById("copyBtn");
  const changeColour = document.getElementById("changeColour");

  changeColour.addEventListener("click", function () {
    let changedBG = generateHexColour().toUpperCase();
    rootDiv.style.backgroundColor = changedBG;
    outputCode.value = changedBG.substring(1);
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${outputCode.value}`);

    if (div !== null) {
      div.remove();
      div = null;
    }

    generateToastMessage(`#${outputCode.value} copied !`);
  });

  outputCode.addEventListener("keyup", function (e) {
    let colour = e.target.value.toUpperCase();
    if (colour) {
      outputCode.value = colour;
      if (isValidHex(colour)) rootDiv.style.backgroundColor = `#${colour}`;
    }
  });
}

function generateHexColour() {
  let red = parseInt(Math.random() * 255),
    green = parseInt(Math.random() * 255),
    blue = parseInt(Math.random() * 255);
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
 * @param {string} colour
 */

function isValidHex(colour) {
  if (colour.length !== 6) false;
  return /^[0-9A-Fa-f]{6}$/i.test(colour);
}
