'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  feedbackForm.addEventListener('input', () => {
    
    const currentState = {
      email: feedbackForm.elements.email.value.trim(),
      message: feedbackForm.elements.message.value.trim(),
    };
    try {
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    } catch (e) {
      console.error('LOCAL STORAGE SET ITEM ERROR');
    }   
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

    if (formValues.email.length > 0 && formValues.message.length > 0) {
      console.log(formValues);
    }

    try {
      localStorage.removeItem('feedback-form-state');
    } catch (e) {
      console.error('LOCAL STORAGE REMOVE ITEM ERROR');
}
    
    feedbackForm.reset();
  });
});
