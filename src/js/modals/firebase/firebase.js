import {
  handleClickOnSingInCloseBtn,
  handleClickOnSingUpCloseBtn,
  userLogIn,
  userLogOut,
} from '../modal-login/authorization-form';

import { createUser, onLogOut, onLogin } from './authorization-servise';

import { deleteBookShopping, postShoppingList } from './firebase-servise';

import validateOnSubmit from '../modal-login/form-validator';

const formSingUp = document.getElementById('singUp');
const formLogIn = document.getElementById('logIn');
const logOut = document.getElementById('logOut');

formSingUp.addEventListener('submit', onCreateUser);
formLogIn.addEventListener('submit', onLogIn);

logOut.addEventListener('click', onLogOutUser);

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

async function onLogOutUser(e) {
  e.preventDefault();
  const localList = JSON.parse(localStorage.getItem('storage-of-books'));
  if (localList) {
    try {
      await deleteBookShopping();
      postShoppingList(localList);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Ошибка 401 Unauthorized
        // Пользователь не авторизован, производим выход без запроса на сервер
        localStorage.removeItem('uid');
        localStorage.removeItem('token');
        userLogOut();
        onLogOut();
        const shoppingListContainer = document.querySelector('.shopping__list');
        if (shoppingListContainer) {
          shoppingListContainer.classList.add('hidden');
        }
        return;
      }
      // Обработка других ошибок
      console.log(error);
    }
  }
  userLogOut();
  onLogOut();
  const shoppingListContainer = document.querySelector('.shopping__list');
  if (shoppingListContainer) {
    shoppingListContainer.classList.add('hidden');
  }
}

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
  if (token) {
    const shoppingListContainer = document.querySelector('.shopping__list');
    if (shoppingListContainer) {
      shoppingListContainer.classList.remove('hidden');
    }
    userLogIn();
  }
}
