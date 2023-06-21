// Подключаем библиотеку "Notiflix".
import {Notify} from 'notiflix';

// Переменные-ссылки на HTML элементы.
const authForm = document.querySelector('.modal-form');
const nameField = document.querySelector('[name=user_name]');
const emailField = document.querySelector('[name=user_email]');
const passwordField = document.querySelector('#signup-user-password');

// Регулярное выражение для валидации адреса электронной почты.
const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

// Регулярное выражение для валидации имени пользователя.
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// Обработчик отправки формы.
authForm.addEventListener('submit', validateOnSubmit);

// Алгоритм валидации.
export default function validateOnSubmit(e) {

  // Убираем пробелы с данных полученных из "инпутов" формы.
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  // Переменные для проверки корректной заполненности полей.
  const testName = name.length === 0 || nameRegExp.test(name);
  const testEmail = email.length === 0 || emailRegExp.test(email);
  const testPassword = password.length > 5;

  // Проверка заполнения полей формы
  if (name === '' || email === '' || password === '') {
    e.preventDefault();
    Notify.failure('Please fill in all form fields', {
      width: '330px',
      position: 'center-top',
      background: '#ff00ff',
      textColor: '#000000',
      notiflixIconColor: '#ffffff',
      fontSize: '18px',
      timeout: 2000,
      // не змінює кольори
    });
    return;
  };

  // Проверка имени пользователя.
  if (!testName) {
    e.preventDefault();
    Notify.failure('Please enter a valid name', {
      width: '330px',
      position: 'center-top',
      background: '#ff00ff',
      textColor: '#000000',
      notiflixIconColor: '#ffffff',
      fontSize: '18px',
      timeout: 2000,
    });
    return;
  }

  // Проверка формата электронной почты.
  else if (!testEmail) {
    e.preventDefault();
    Notify.failure('Please enter a valid email', {
      width: '330px',
      position: 'center-top',
      background: '#ff00ff',
      textColor: '#000000',
      notiflixIconColor: '#ffffff',
      fontSize: '18px',
      timeout: 2000,
    });
    return;
  }

  // Проверка длины пароля (не менее 5-и символов).
  else if (!testPassword) {
    e.preventDefault();
    Notify.failure('Password must be more than 5 characters', {
      width: '330px',
      position: 'center-top',
      background: '#ff00ff',
      textColor: '#000000',
      notiflixIconColor: '#ffffff',
      fontSize: '18px',
      timeout: 2000,
    });
    return;
  }

  // Если проверки прошли успешно => отправляем форму.
  return true;
}


//! Поправить стили сообщений "Notiflix".