import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const getItemData = localStorage.getItem(STORAGE_KEY);
const savedData = JSON.parse(getItemData);

if (savedData !== null) {
  form['email'].value = savedData.email;
  form['message'].value = savedData.message;
}

form.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: `${form['email'].value}`,
      message: `${form['message'].value}`,
    };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, formDataJSON);
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: `${form['email'].value}`,
    message: `${form['message'].value}`,
  };
  console.log(formData);

   localStorage.removeItem(STORAGE_KEY);
  form['email'].value = '';
  form['message'].value = '';
});

