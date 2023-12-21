'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  feedbackForm.addEventListener('input', () => {
    
    const currentState = {
      email: feedbackForm.elements.email.value,
      message: feedbackForm.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  });

  try {
  const storedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  feedbackForm.elements.email.value = storedState.email || '';
  feedbackForm.elements.message.value = storedState.message || '';
} catch (e) {
    console.error('LOCAL STORAGE PARSE ERROR');
}


  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();


    const formValues = {
      email: feedbackForm.elements.email.value,
      message: feedbackForm.elements.message.value,
    };
    console.log(formValues);


    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  });
});
