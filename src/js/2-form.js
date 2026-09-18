const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Заповнення полів та об'єкта при завантаженні сторінки з localStorage
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  } catch (error) {
    console.error('Помилка читання з localStorage:', error);
  }
}

// Слухач події input (делегування на рівні форми)
form.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  if (fieldName in formData) {
    formData[fieldName] = fieldValue.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Слухач події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});
