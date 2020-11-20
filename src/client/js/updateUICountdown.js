const updateUICountdown = async (daysLeft) => {
  const countDownSelector = document.querySelector("#countDown");
  const countDownText =
    daysLeft <= 16
      ? `${daysLeft} days left`
      : `${daysLeft} days left <br />*forecast max is 16 days`;

  try {
    countDownSelector.innerHTML = countDownText;
    return daysLeft;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUICountdown };

// Source for dateDiff: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
