const updateUIWeather = async (data) => {
  const forecastSelector = document.querySelector("#forecastDesc");
  const forecastDesc = `Temperature: ${data.temp}c Forecast: ${data.weather.description}`;
  try {
    forecastSelector.textContent = forecastDesc;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUIWeather };
