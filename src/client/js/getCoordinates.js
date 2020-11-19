const getCoordinates = async (city) => {
  const url = `http://localhost:8081/coordinates?city=${city}`;
  try {
    const response = await fetch(url);
    const responseFormated = await response.json();
    return responseFormated;
  } catch (error) {
    console.log("getCoordinates error: ", error);
  }
};

export { getCoordinates };
