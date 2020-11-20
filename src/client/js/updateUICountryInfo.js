const updateUICountryInfo = async (data) => {
  const factsSelector = document.querySelector("#facts");
  const countryFacts = `Name: ${data.name} <br>
  Capital: ${data.capital}  <br>
  Currency: ${data.currencies[0].name} <br>
  Domain: ${data.topLevelDomain[0]}`;
  try {
    factsSelector.innerHTML = countryFacts;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICountryInfo };
