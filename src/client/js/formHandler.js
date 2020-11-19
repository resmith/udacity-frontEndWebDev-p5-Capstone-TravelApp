/* Function to GET Project Data */
const handleSubmit = (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  Client.getCoordinates(city).then((data) => Client.updateUICoordinates(data));
};

export { handleSubmit };
