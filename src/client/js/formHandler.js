/* Function to GET Project Data */
const handleSubmit = (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const dayForForecast = document.getElementById("date").value;
  let forecastInfo = {};
  if (city !== "") {
    Client.getCoordinates(city)
      .then((data) => Client.updateUICoordinates(data))
      .then((data) => {
        forecastInfo.lat = data.lat;
        forecastInfo.lng = data.lng;
        forecastInfo.countryCode = data.countryCode;
        forecastInfo.dayForForecast = dayForForecast;
        return forecastInfo;
      })
      .then((forecastInfo) => Client.getWeather(forecastInfo))
      .then((forecast) => Client.updateUIWeather(forecast))
      .then(() => {
        console.log("handleSubmit forecastInfo: ", forecastInfo);
      })
      .then(() => Client.getCountryInfo(forecastInfo.countryCode))
      .then((countryInfo) => Client.updateUICountryInfo(countryInfo))
      .then(() => Client.getPic(city))
      .then((picInfo) => Client.updateUIPic(picInfo));
  } else {
    alert("Need to enter a city first");
  }
};

export { handleSubmit };
