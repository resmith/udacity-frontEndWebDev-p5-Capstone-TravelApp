const updateUICountryInfo = async (data) => {
  console.log("updateUICountryInfo data: ", data);
  const factsSelector = document.querySelector("#facts");
  const countryFacts = `name: ${data.name} <br>
  capital: ${data.capital}     currencies: ${data.currencies[0].name} <br>
  domain: ${data.topLevelDomain[0]}`;
  console.log("updateUICountryInfo countryFacts: ", countryFacts);
  try {
    factsSelector.textContent = countryFacts;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICountryInfo };
