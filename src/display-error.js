function displayError(errorMsg) {
  const weatherContainer = document.querySelector('#weather');
  const errorP = document.createElement('p');

  // clear existing content from weatherContainer
  while (weatherContainer.childNodes.length > 0) {
    weatherContainer.childNodes[0].remove();
  }

  errorP.innerHTML = errorMsg;
  weatherContainer.appendChild(errorP);
}

export default displayError;
