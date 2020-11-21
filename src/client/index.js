import { cleanText } from "./js/utils";
import { handleSubmit } from "./js/formHandler";
import { formatDate } from "./js/formatDate";
import { app } from "./js/app";
import { getCoordinates } from "./js/getCoordinates";
import { updateUICoordinates } from "./js/updateUICoordinates";
import { getWeather } from "./js/getWeather";
import { updateUIWeather } from "./js/updateUIWeather";
import { getPic } from "./js/getPic";
import { updateUIPic } from "./js/updateUIPic";
import { getCountryInfo } from "./js/getCountryInfo";
import { updateUICountryInfo } from "./js/updateUICountryInfo";
import { updateUICountdown } from "./js/updateUICountdown";
import { clearWorkBoxCache } from "./js/clearWorkBoxCache";

export {
  app,
  cleanText,
  updateUICoordinates,
  getCoordinates,
  handleSubmit,
  formatDate,
  getWeather,
  updateUIWeather,
  getPic,
  updateUIPic,
  getCountryInfo,
  updateUICountryInfo,
  updateUICountdown,
};

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/card.scss";
import "./styles/form.scss";
import "./styles/footer.scss";
import "./styles/grid.scss";
import "./styles/header.scss";

document.addEventListener("DOMContentLoaded", () => {
  // Used for clearing out for dev / testing
  // clearWorkBoxCache();

  app();
});

console.log("Client started");
