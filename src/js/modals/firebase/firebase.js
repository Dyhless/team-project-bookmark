// Импортируем функции из "authorization-form.js".
import {
  handleClickOnSingInCloseBtn,
  handleClickOnSingUpCloseBtn,
  userLogIn,
  userLogOut,
} from '../modal-login/authorization-form';

// Импортируем функции из "authorization-servise.js".
import { createUser, onLogOut, onLogin } from './authorization-servise';

// Импортируем функции из "firebase-servise.js".
import { deleteBookShopping, postShoppingList } from './firebase-servise';

// Импортируем функции из "form-validator.js".
import validateOnSubmit from '../modal-login/form-validator';

// Переменные-ссылки на HTML элементы.
const formSingUp = document.getElementById('singUp');
const formLogIn = document.getElementById('logIn');
const logOut = document.getElementById('logOut');

// Вешаем слушателей на элементы формы входа в аккаунт.
formSingUp.addEventListener('submit', onCreateUser);
formLogIn.addEventListener('submit', onLogIn);

// Вешаем слушателя на кнопку выхода из аккаунта -> "User Bar" в "хедере".
logOut.addEventListener('click', onLogOutUser);

//!!! - "await"
async function onCreateUser(e) {
  e.preventDefault();
  const {
    elements: { user_name, user_email, user_password },
  } = e.currentTarget;
  const displayName = user_name.value;
  const userEmail = user_email.value;
  const userPassword = user_password.value;
  const valid = validateOnSubmit(e);
  if (!valid) {
    return;
  }
  e.currentTarget.reset();
  await createUser(userEmail, userPassword, displayName);
  userLogIn();
  handleClickOnSingUpCloseBtn();
}

//!!!
async function onLogOutUser(e) {
  e.preventDefault();
  const localList = JSON.parse(localStorage.getItem('storage-of-books'));
  if (localList) {
    await deleteBookShopping();
    postShoppingList(localList);
  }
  userLogOut();
  onLogOut();

  // Скрыть список выбранных книг
  const shoppingListContainer = document.querySelector('.shopping__list');
  shoppingListContainer.classList.add('hidden');
}

//!!!
function onLogIn(e) {
  e.preventDefault();
  const {
    elements: { user_email, user_password },
  } = e.currentTarget;
  const userEmail = user_email.value;
  const userPassword = user_password.value;
  e.currentTarget.reset();
  onLogin(userEmail, userPassword);
  handleClickOnSingInCloseBtn();
  const token = JSON.parse(localStorage.getItem('token'));
  // console.log(token);
  if (token) {
    // Отобразить список выбранных книг
    const shoppingListContainer = document.querySelector('.shopping__list');
    shoppingListContainer.classList.remove('hidden');

    userLogIn();
  }
}
