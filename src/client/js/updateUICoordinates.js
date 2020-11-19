const updateUICoordinates = async (data) => {
  console.log("updateUICoordinates data: ", data);
  const latSelector = document.querySelector("#lat");
  const longSelector = document.querySelector("#long");

  try {
    latSelector.textContent = data.lat;
    longSelector.textContent = data.lng;
    return;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICoordinates };
