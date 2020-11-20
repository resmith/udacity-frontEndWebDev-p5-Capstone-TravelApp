const updateUIPic = async (data) => {
  const cityId = "cityImage";
  const cityImageSelector = document.getElementById(cityId);
  const imageCaptionSelector = document.getElementById("imageCaption");

  const imgUrl = data.webformatURL;
  const tags = data.tags;

  try {
    if (data.webformatURL !== "") {
      const tag = tags.split(",")[0];
      document.getElementById(cityId).style.visibility = "visible";
      cityImageSelector.setAttribute("src", imgUrl);
      imageCaptionSelector.textContent = `${tag} image from pixabay`;
    } else {
      document.getElementById(cityId).style.visibility = "hidden";
      cityImageSelector.removeAttribute("src");
      imageCaptionSelector.textContent = ``;
    }
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUIPic };
