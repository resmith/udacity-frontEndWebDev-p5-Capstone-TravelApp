const getWeather = async (coords) => {
  const url = `http://localhost:8081/weather?lat=${coords.lat}&lng=${coords.lng}`;
  try {
    const response = await fetch(url);
    const responseFormated = await response.json();
    return responseFormated;
  } catch (error) {
    console.log("getWeather error: ", error);
  }
};

export { getWeather };
