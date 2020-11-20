const updateUIPic = async (data) => {
  const cityId = "cityImage";
  const cityImageSelector = document.getElementById(cityId);
  const imageCaptionSelector = document.getElementById("imageCaption");
  const imgUrl = data.webformatURL;
  const tags = data.tags;
  const tag = tags.split(",")[0];
  try {
    document.getElementById(cityId).style.visibility = "visible";
    cityImageSelector.setAttribute("src", imgUrl);
    imageCaptionSelector.textContent = `${tag} image from pixabay`;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUIPic };
