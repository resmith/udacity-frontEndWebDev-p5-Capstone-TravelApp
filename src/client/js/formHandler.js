/* Function to GET Project Data */
const handleSubmit = (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const dayForForecast = document.getElementById("date").value;

  const dateSelector = document.getElementById("date");
  const travelDate = new Date(dateSelector.value);
  const currentDate = Date.now();
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const daysLeft = Math.round(Math.abs((travelDate - currentDate) / oneDay));

  let forecastInfo = {};
  if (city !== "") {
    Client.getCoordinates(city)
      .then((data) => Client.updateUICoordinates(data))
      .then((data) => {
        forecastInfo.lat = data.lat;
        forecastInfo.lng = data.lng;
        forecastInfo.countryCode = data.countryCode;
        forecastInfo.dayForForecast = dayForForecast;
        forecastInfo.daysLeft = daysLeft;
        return forecastInfo;
      })
      .then((forecastInfo) => Client.getWeather(forecastInfo))
      .then((forecast) => Client.updateUIWeather(forecast))
      .then(() => Client.getCountryInfo(forecastInfo.countryCode))
      .then((countryInfo) => Client.updateUICountryInfo(countryInfo))
      .then(() => Client.getPic(city))
      .then((picInfo) => Client.updateUIPic(picInfo))
      .then(() => Client.updateUICountdown(daysLeft));
  } else {
    alert("Need to enter a city first");
  }
};

export { handleSubmit };
