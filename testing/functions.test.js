import { translateToCharacter, translateToMorse } from "../scripts/functions.js";

describe("Tests for translateToCharacter function", () => {
  it("should return a string", () => {
    expect(typeof translateToCharacter("--- ---")).toBe("string");
  });
  it("should throw an error if input is invalid.", () => {
    expect(() => translateToCharacter("")).toThrow(
      new Error("input is empty, please provide text")
    );
    expect(() => translateToCharacter("o")).toThrow(
      new Error("The character o at the index of 0 is an invalid input for morse code.")
    )
    expect(() => translateToCharacter("--...---")).toThrow(
      new Error("The character --...--- at the index of 0 is an invalid input for morse code.")
    )
  });
});

describe("Tests for translateToMorse function", () => {
  it("should return a string", () => {
    expect(typeof translateToMorse("Hello There")).toBe("string");
  });
  
  it("should throw an error if input is an invalid code.", () => {
    expect(() => translateToMorse("")).toThrow(
      new Error("input is empty, please provide text")
    );
        expect(() => translateToMorse("{")).toThrow(
      new Error(`The character { at the index of 0 is an invalid input for morse code.`)
    )
  
  expect(() => translateToMorse("{ hero }")).toThrow(
    new Error(`The character {, } at the index of 0, 7 is an invalid input for morse code.`)
  );
});
    
    it("should return morsecode from lower and uppercase characters", () => {
      expect(translateToMorse("HeLlO")).toStrictEqual(".... . .-.. .-.. ---")
    })
});
