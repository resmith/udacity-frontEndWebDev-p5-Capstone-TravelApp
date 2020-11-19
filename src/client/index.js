import { checkForName, cleanText } from "./js/utils";
import { updateUICoordinates } from "./js/updateUICoordinates";
import { getCoordinates } from "./js/getCoordinates";
import { handleSubmit } from "./js/formHandler";
import { app } from "./js/app";

export {
  app,
  checkForName,
  cleanText,
  updateUICoordinates,
  getCoordinates,
  handleSubmit,
};

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/grid.scss";
import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/footer.scss";
import "./styles/results.scss";

console.log("Client started");
