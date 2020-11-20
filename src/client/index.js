import { checkForName, cleanText } from "./js/utils";
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

export {
  app,
  checkForName,
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
import "./styles/grid.scss";
import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/footer.scss";
import "./styles/results.scss";

console.log("Client started");
