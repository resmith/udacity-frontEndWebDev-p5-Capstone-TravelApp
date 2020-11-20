const updateUIPic = async (data) => {
  console.log("updateUIPic data: ", data);
  const cityImageSelector = document.querySelector("#cityImage");
  const imgUrl = data.webformatURL;
  console.log("updateUIPic imgUrl: ", imgUrl);
  try {
    cityImageSelector.setAttribute("src", imgUrl);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUIPic };
