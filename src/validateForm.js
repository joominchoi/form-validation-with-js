function displayErrorIfEmpty(emailInput, countryInput, zipInput) {
  let isEmpty = false;

  const emailValue = emailInput.value.trim();
  const countryValue = countryInput.value.trim();
  const zipValue = zipInput.value.trim();

  if (emailValue === '') {
    isEmpty = true;
    const emailErrorMessage = document.querySelector('#email-container > span');
    emailErrorMessage.textContent = 'You need to enter an email address.';
    emailErrorMessage.className = emailErrorMessage.textContent ? 'error active' : 'error';
  }

  if (countryValue === '') {
    isEmpty = true;
    const countryErrorMessage = document.querySelector('#country-container > span');
    countryErrorMessage.textContent = 'You need to enter a country.';
    countryErrorMessage.className = countryErrorMessage.textContent ? 'error active' : 'error';
  }

  if (zipValue === '') {
    isEmpty = true;
    const zipErrorMessage = document.querySelector('#zip-container > span');
    zipErrorMessage.textContent = 'You need to enter a ZIP code.';
    zipErrorMessage.className = zipErrorMessage.textContent ? 'error active' : 'error';
  }

  if (isEmpty) {
    alert('Please fill in all required fields.');
  }
}

export default displayErrorIfEmpty;
