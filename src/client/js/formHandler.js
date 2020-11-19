/* Function to GET Project Data */
const handleSubmit = (event) => {
  event.preventDefault();
  let formText = document.getElementById("text").value;
  const checkedText = Client.checkForName(formText);
  const cleanedText = Client.cleanText(checkedText);
  Client.getSentiment(cleanedText).then((data) => Client.updateUI(data));
};

export { handleSubmit };
