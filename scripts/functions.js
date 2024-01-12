import morseCode from "./dataObjects.js";

const translateToMorse = (input) => {
  const errorMessages = []
  const errorIndexes = []
  if (input.length < 1) {
    throw Error("input is empty, please provide text");
  }
  const seperating = input.replaceAll("\n", "").trim().split("");
  console.log(seperating);
  let encrypted = seperating
    .map((character, index) => {
      console.log([character, index]);
      const uppercase = character.toUpperCase();
      let value = morseCode[uppercase];
      if (value === undefined) {
        errorMessages.push(character)
        errorIndexes.push(index)
      }
      return value;
    })
    .join(" ");
  if (errorMessages.length > 0) {
     throw Error(`The character ${errorMessages.join(", ")} at the index of ${errorIndexes.join(", ")} is an invalid input for morse code.`)
  }
  console.log(encrypted);
  return encrypted;
};

const translateToCharacter = (input) => {
  const errorMessages = [];
  const errorIndexes = []
  if (input.length < 1) {
    throw Error("input is empty, please provide text");
  }
  const switched = Object.entries(morseCode).reduce((acc, curr) => {
    let key = curr[1];
    let value = curr[0];
    acc[key] = value;
    return acc;
  }, {});

  const seperating = input.split(" ");
  let encrypted = seperating
    .map((character, index) => {
      let value = switched[character];
      if (character === "") {
        return "";
      }
      if (value === undefined) {
        errorMessages.push(character)
        errorIndexes.push(index)
      }
      return value;
    })
    .join(" ");
  if (errorMessages.length > 0) {
    throw Error(`The character ${errorMessages.join(", ")} at the index of ${errorIndexes.join(", ")} is an invalid input for morse code.`);
  }
  return encrypted;
};

export { translateToCharacter, translateToMorse };
