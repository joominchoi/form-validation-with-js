function displayErrorIfEmpty(form) {
  const formElements = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
  let isEmpty = false;

  formElements.forEach((element) => {
    if (element.value.trim() === '') {
      isEmpty = true;
      // const containerId = element.getAttribute('id') + '-container';
      // const errorContainer = document.getElementById(containerId);

      // Display an error message
      // if (errorContainer) {
      //   errorContainer.classList.add('error'); // You can add a specific class for styling
      // }
    }
  });

  if (isEmpty) {
    alert('Please fill in all required fields.');
  }
}

export default displayErrorIfEmpty;