const updateUI = async (data) => {
  const agreementSelector = document.querySelector("#agreement");
  const subjectivitySelector = document.querySelector("#subjectivity");
  const confidenceSelector = document.querySelector("#confidence");
  const ironySelector = document.querySelector("#irony");

  try {
    agreementSelector.textContent = data.agreement;
    subjectivitySelector.textContent = data.subjectivity;
    confidenceSelector.textContent = data.confidence;
    ironySelector.textContent = data.irony;
    return;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
