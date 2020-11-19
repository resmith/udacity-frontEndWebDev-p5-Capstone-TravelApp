function checkForName(inputText) {
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    return "Welcome, Captain!";
  }

  return inputText;
}

function cleanText(text) {
  return text.replace(/[\W_]+/g, " ");
}

export { checkForName, cleanText };
