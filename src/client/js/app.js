/* Function to GET Project Data */
const submitBtnSelector = "#submitBtn";
const dateInputId = "date";

const app = () => {
  const submitBtn = document.querySelector(submitBtnSelector);
  submitBtn.addEventListener("click", (event) => {
    return Client.handleSubmit(event);
  });

  const dateToday = Client.formatDate(Date.now());
  const dateInput = document.getElementById(dateInputId);
  dateInput.value = dateToday;
};

export { app };
