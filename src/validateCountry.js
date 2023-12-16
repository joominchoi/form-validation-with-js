function validateCountry(countryInput) {
  const errorMessage = countryInput.parentElement.querySelector('.error');
  const emailValue = countryInput.value.trim();

  if (emailValue === '') {
    errorMessage.textContent = 'You need to enter a country.';
  // } else if (!emailRegex.test(emailValue)) {
  //   errorMessage.textContent = 'Entered value needs to be an email address.';
  // } else if (emailValue.length < emailInput.minLength) {
  //   errorMessage.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailValue.length}.`;
  } else {
    errorMessage.textContent = '';
  }

  errorMessage.className = errorMessage.textContent ? 'error active' : 'error';
}

export default validateCountry;
