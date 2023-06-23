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

function onLogOutUser(e) {
  e.preventDefault();
  const localList = JSON.parse(localStorage.getItem('storage-of-books'));
  if (localList) {
    deleteBookShopping()
      .then(() => {
        postShoppingList(localList);
      })
      .finally(() => {
        localStorage.clear(); // Очищаем локальное хранилище
        userLogOut();
        onLogOut();
      });
  } else {
    localStorage.clear(); // Очищаем локальное хранилище
    userLogOut();
    onLogOut();
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
    userLogIn();
  }
}
