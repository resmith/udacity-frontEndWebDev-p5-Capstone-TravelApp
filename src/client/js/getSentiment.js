function getSentiment(text) {
  const url = `http://localhost:8081/meaning?text=${text}`;

  return fetch(url).then((response) => {
    var data = response.json();
    return data;
  });
}

export { getSentiment };
