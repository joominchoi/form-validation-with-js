import validateCountry from './validateCountry';
import validateEmail from './validateEmail';
import displayErrorIfEmpty from './validateForm';
import validateZIP from './validateZIP';

function createProjectForm() {
  const form = document.createElement('form');
  form.id = 'form';

  const emailContainer = document.createElement('div');
  emailContainer.id = 'email-container';
  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  emailLabel.textContent = 'Email: ';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.minLength = 8;

  emailInput.addEventListener('input', () => {
    validateEmail(emailInput);
  });

  const emailErrorMessage = document.createElement('span');
  emailErrorMessage.className = 'error';
  emailErrorMessage.setAttribute('aria-live', 'polite');
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  emailContainer.appendChild(emailErrorMessage);
  form.appendChild(emailContainer);

  const countryContainer = document.createElement('div');
  countryContainer.id = 'country-container';
  const countryLabel = document.createElement('label');
  countryLabel.htmlFor = 'country';
  countryLabel.textContent = 'Country: ';
  const countryInput = document.createElement('input');
  countryInput.type = 'text';
  countryInput.id = 'country';
  countryInput.name = 'country';

  countryInput.addEventListener('input', () => {
    validateCountry(countryInput);
  });

  const countryErrorMessage = document.createElement('span');
  countryErrorMessage.className = 'error';
  countryErrorMessage.setAttribute('aria-live', 'polite');
  countryContainer.appendChild(countryLabel);
  countryContainer.appendChild(countryInput);
  countryContainer.appendChild(countryErrorMessage);
  form.appendChild(countryContainer);

  const zipContainer = document.createElement('div');
  zipContainer.id = 'zip-container';
  const zipLabel = document.createElement('label');
  zipLabel.htmlFor = 'zip';
  zipLabel.textContent = 'ZIP Code: ';
  const zipInput = document.createElement('input');
  zipInput.type = 'text';
  zipInput.id = 'zip';
  zipInput.name = 'zip';

  zipInput.addEventListener('input', () => {
    validateZIP(zipInput);
  });

  const zipErrorMessage = document.createElement('span');
  zipErrorMessage.className = 'error';
  zipErrorMessage.setAttribute('aria-live', 'polite');
  zipContainer.appendChild(zipLabel);
  zipContainer.appendChild(zipInput);
  zipContainer.appendChild(zipErrorMessage);
  form.appendChild(zipContainer);

  const passwordContainer = document.createElement('div');
  passwordContainer.id = 'password-container';
  const passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  passwordLabel.textContent = 'Password: ';
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  passwordContainer.appendChild(passwordLabel);
  passwordContainer.appendChild(passwordInput);
  form.appendChild(passwordContainer);

  const confirmPasswordContainer = document.createElement('div');
  confirmPasswordContainer.id = 'confirm-password-container';
  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.htmlFor = 'confirm-password';
  confirmPasswordLabel.textContent = 'Confirm Password: ';
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'confirm-password';
  confirmPasswordInput.name = 'confirm-password';
  confirmPasswordContainer.appendChild(confirmPasswordLabel);
  confirmPasswordContainer.appendChild(confirmPasswordInput);
  form.appendChild(confirmPasswordContainer);

  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', () => {
    displayErrorIfEmpty(emailInput, countryInput, zipInput);
  });

  form.appendChild(submitButton);

  return form;
}

export default createProjectForm;
