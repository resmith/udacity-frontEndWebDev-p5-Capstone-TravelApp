const getCountryInfo = async (countryCode) => {
  const url = `http://localhost:8081/countryInfo?country=${countryCode}`;
  try {
    const response = await fetch(url);
    const responseFormated = await response.json();
    return responseFormated;
  } catch (error) {
    console.log("getCountryInfo error: ", error);
  }
};

export { getCountryInfo };
