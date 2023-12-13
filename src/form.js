function createProjectForm() {
  const form = document.createElement('form');
  form.id = 'form';

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email: ';
  form.appendChild(emailLabel);
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'name';
  form.appendChild(emailInput);

  form.appendChild(document.createElement('br'));

  const countryLabel = document.createElement('label');
  countryLabel.textContent = 'Country: ';
  form.appendChild(countryLabel);
  const countryInput = document.createElement('input');
  countryInput.type = 'text';
  countryInput.id = 'country';
  countryInput.name = 'country';
  form.appendChild(countryInput);
  form.appendChild(document.createElement('br'));

  const zipLabel = document.createElement('label');
  zipLabel.textContent = 'ZIP Code: ';
  form.appendChild(zipLabel);
  const zipInput = document.createElement('input');
  zipInput.type = 'text';
  zipInput.id = 'zip';
  zipInput.name = 'zip';
  form.appendChild(zipInput);
  form.appendChild(document.createElement('br'));

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password: ';
  form.appendChild(passwordLabel);
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));

  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.textContent = 'Confirm Password: ';
  form.appendChild(confirmPasswordLabel);
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'confirm-password';
  confirmPasswordInput.name = 'confirm-password';
  form.appendChild(confirmPasswordInput);
  form.appendChild(document.createElement('br'));

  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  return form;
}

export default createProjectForm;
