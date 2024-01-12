import { translateToCharacter, translateToMorse } from "./functions.js";
import morseCode from "./dataObjects.js";

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("inputText");
  const code = input.value;
  const inputOption = document.getElementById("inputOption");
  const result = document.getElementById("outputText");
  const error = document.createElement("p");
  const errorContainer = document.getElementById("errorMessage");
  error.classList.add("error");

  result.value = "";
  errorContainer.innerHTML = "";
  console.log(code);
  if (inputOption.innerHTML === "Text") {
    try {
      const translate = translateToMorse(code);
      console.log(translate);
      result.value = translate;
    } catch (e) {
      error.innerHTML = e.message;
      errorContainer.appendChild(error);
    }
  } else {
    try {
      const translate = translateToCharacter(code);
      result.value = translate;
    } catch (e) {
      error.innerHTML = e.message;
      errorContainer.appendChild(error);
    }
  }
});

const selectButton = document.getElementById("selectButton");

selectButton.addEventListener("click", (e) => {
  const inputOption = document.getElementById("inputOption");
  const outputOption = document.getElementById("outputOption");
  const outputText = document.getElementById("outputText");
  const inputText = document.getElementById("inputText");
  e.preventDefault();
  const header = document.getElementById("header");
  console.log(inputOption.innerHTML);
  if (outputOption.innerHTML === "Text") {
    header.innerHTML = "Text to Morse Code";
    inputOption.innerHTML = "Text";
    outputOption.innerHTML = "Morse";
  } else {
    header.innerHTML = "Morse Code to Text";
    inputOption.innerHTML = "Morse";
    outputOption.innerHTML = "Text";
  }
  outputText.value = "";
  inputText.value = "";
});

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const table = document.getElementById("tableContents");
  let morseCodeTable = Object.entries(morseCode)
 
  morseCodeTable.map((item) => {
    console.log(item[1])
    if (item[1] === "/") {
      return;
      }
    const p = document.createElement("p");
    const str = item.join(" ");
    p.append(str);
    p.classList.add("table__contents__text");
    console.log(p);
    table.appendChild(p);
  });
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");
  inputText.value = "";
  outputText.value = "";
});


const copyButton = document.getElementById("copyButton")

copyButton.addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("outputText")
  const myTooltip = document.getElementById("myTooltip")
  text.select()
  navigator.clipboard.writeText(text.value);
  myTooltip.innerHTML = "Copied"
})

copyButton.addEventListener("mouseout", (e) => {
  e.preventDefault();
  const myTooltip = document.getElementById("myTooltip")
  myTooltip.innerHTML = "Copy"
});