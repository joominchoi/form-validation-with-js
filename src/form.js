import validateEmail from './validateEmail';

function createProjectForm() {
  const form = document.createElement('form');
  form.id = 'form';

  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  emailLabel.textContent = 'Email: ';
  form.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'name';
  // emailInput.required = true;
  emailInput.minLength = 8;

  emailInput.addEventListener('input', () => {
    validateEmail(emailInput);
  });

  const errorMessage = document.createElement('span');
  errorMessage.className = 'error';
  errorMessage.setAttribute('aria-live', 'polite');
  emailLabel.appendChild(emailInput);
  emailLabel.appendChild(errorMessage);
  form.appendChild(emailLabel);

  form.appendChild(document.createElement('br'));

  const countryLabel = document.createElement('label');
  countryLabel.htmlFor = 'country';
  countryLabel.textContent = 'Country: ';
  const countryInput = document.createElement('input');
  countryInput.type = 'text';
  countryInput.id = 'country';
  countryInput.name = 'country';
  countryLabel.appendChild(countryInput);
  form.appendChild(countryLabel);

  form.appendChild(document.createElement('br'));

  const zipLabel = document.createElement('label');
  zipLabel.htmlFor = 'zip';
  zipLabel.textContent = 'ZIP Code: ';
  const zipInput = document.createElement('input');
  zipInput.type = 'text';
  zipInput.id = 'zip';
  zipInput.name = 'zip';
  zipLabel.appendChild(zipInput);
  form.appendChild(zipLabel);

  form.appendChild(document.createElement('br'));

  const passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'password';
  passwordLabel.textContent = 'Password: ';
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  passwordLabel.appendChild(passwordInput);
  form.appendChild(passwordLabel);

  form.appendChild(document.createElement('br'));

  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.htmlFor = 'confirm-password';
  confirmPasswordLabel.textContent = 'Confirm Password: ';
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'confirm-password';
  confirmPasswordInput.name = 'confirm-password';
  confirmPasswordLabel.appendChild(confirmPasswordInput);
  form.appendChild(confirmPasswordLabel);

  form.appendChild(document.createElement('br'));

  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  return form;
}

export default createProjectForm;
