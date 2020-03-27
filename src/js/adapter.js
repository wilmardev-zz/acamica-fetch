// Return json without promise
const sendRequest = async url => {
  return fetch(url)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response;
      }
      return null;
    })
    .catch(error => {
      console.error(error);
      throw new Error(JSON.stringify(error));
    });
};

// Return string text from promise
const sendResquestText = async url => {
  return fetch(url)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.text();
      }
      throw new Error(JSON.stringify(response));
    })
    .then(dataText => dataText)
    .catch(error => {
      throw new Error(error);
    });
};
