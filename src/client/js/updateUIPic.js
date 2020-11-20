const updateUIPic = async (data) => {
  const cityImageSelector = document.querySelector("#cityImage");
  const imageCaptionSelector = document.querySelector("#imageCaption");
  const imgUrl = data.webformatURL;
  const tags = data.tags;
  const tag = tags.split(",")[0];
  try {
    cityImageSelector.setAttribute("src", imgUrl);
    imageCaptionSelector.textContent = `${tag} image from pixabay`;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUIPic };
