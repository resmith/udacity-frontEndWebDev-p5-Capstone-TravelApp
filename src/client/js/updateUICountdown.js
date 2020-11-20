const updateUICountdown = async () => {
  const dateSelector = document.getElementById("date");
  const countDownSelector = document.querySelector("#countDown");
  const travelDate = new Date(dateSelector.value);
  const currentDate = Date.now();
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const daysLeft = Math.round(Math.abs((travelDate - currentDate) / oneDay));

  try {
    countDownSelector.textContent = `${daysLeft} days left`;
    return daysLeft;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICountdown };

// Source for dateDiff: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
