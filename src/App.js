import createProjectForm from './form';

function initializeWebsite() {
  const content = document.getElementById('content');

  content.append(createProjectForm());
}

export default initializeWebsite;
