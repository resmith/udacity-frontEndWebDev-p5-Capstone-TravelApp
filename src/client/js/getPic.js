const getPic = async (city) => {
  const url = `http://localhost:8081/pic?city=${city}`;
  try {
    const response = await fetch(url);
    const responseFormated = await response.json();
    return responseFormated;
  } catch (error) {
    console.log("getWeather error: ", error);
  }
};

export { getPic };
