function cleanText(text) {
  return text.replace(/[\W_]+/g, " ");
}

export { cleanText };
