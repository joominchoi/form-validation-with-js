function validateCountry(countryInput) {
  const errorMessage = countryInput.parentElement.querySelector('.error');
  const emailValue = countryInput.value.trim();

  if (emailValue === '') {
    errorMessage.textContent = 'You need to enter a country.';
  } else {
    errorMessage.textContent = '';
  }

  errorMessage.className = errorMessage.textContent ? 'error active' : 'error';
}

export default validateCountry;
