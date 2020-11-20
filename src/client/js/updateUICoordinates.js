const updateUICoordinates = async (data) => {
  const coordsSelector = document.querySelector("#coords");

  const coordinates = `Lat: ${data.lat} Long: ${data.lng}`;
  try {
    coordsSelector.textContent = coordinates;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICoordinates };
