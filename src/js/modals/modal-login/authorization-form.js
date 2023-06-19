// Переменные-ссылки на HTML элементы.
const openSignUpBtnEl = document.getElementById('signUp-open-btn');
//! Добавить "реф" для кнопки "SignUp" мобильного меню.
const closeSignUpBtnEl = document.getElementById('signUp-modal-close-btn');
const signUpModalEl = document.getElementById('sign-up-modal');
const openSignInBtnEl = document.getElementById('signIn-open-btn');
const openSignUpBtnSecondEl = document.getElementById('signUp-open-btn-second');
const closeSignInBtnEl = document.getElementById('signIn-modal-close-btn');
const userBarMenu = document.getElementById('userBarMenu');
const signInModalWindowEl = document.getElementById('sign-in-modal-window');
const signUpModalWindowEl = document.getElementById('sign-up-modal-window');
const logOutMenu = document.getElementById('logOutMenu');
const singUpBtn = document.querySelector('.userbar-btn');


// Слушатель на кнопке "SignUp" в "хедере".
openSignUpBtnEl.addEventListener('click', handleClickOnSingUpOpenBtn);
//! Добавить слушатель для кнопки "SignUp" мобильного меню.


//! Слушатели аутентификации - рассортировать по функциям "Open" и "Close", добавляя в "Open" (addEventListener) и удаляя их в "Close".
closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn); // => Open
signUpModalEl.addEventListener('click', handleClickOnSingUpBackdrop); // => Open
openSignInBtnEl.addEventListener('click', handleClickOnSingInOpenBtn); // => Open
openSignUpBtnSecondEl.addEventListener('click', handleClickOnSingUpSecondCloseBtn); // => Open
closeSignInBtnEl.addEventListener('click', handleClickOnSingInCloseBtn); // => Open
userBarMenu.addEventListener('click', openUserBarMenu); // => В авторизованных

// Открываем модальное окно "Sign up".
function handleClickOnSingUpOpenBtn() {
  signUpModalEl.classList.add('open');
  signInModalWindowEl.style.display = 'none';
  signUpModalWindowEl.style.display = 'block';
}

// Закрываем модальное окно "Sign up" по клику на "Х".
export function handleClickOnSingUpCloseBtn() {
  signUpModalEl.classList.remove('open');
}

// Закрываем модальные окна "Sign up" и "Sign in" при нажатии на клавишу "Esc".
//! Подумать куда перенести этот слушатель и добавить ему антипод.
window.addEventListener('keydown', evt => {
  if (signUpModalEl.classList.contains('open')) {
    if (evt.key === 'Escape') {
      signUpModalEl.classList.remove('open');
    }
  }
});

// Закрываем модальные окна "Sign up" и "Sign in" при клике на "бекдроп".
function handleClickOnSingUpBackdrop(evt) {
  if (evt.target === signUpModalEl) handleClickOnSingUpCloseBtn();
}

// Открываем модальное окно "Sign in".
function handleClickOnSingInOpenBtn() {
  signUpModalWindowEl.style.display = 'none';
  signInModalWindowEl.style.display = 'block';
}

// Закрываем модальное окно "Sign in" по клику на "Х".
export function handleClickOnSingInCloseBtn() {
  signUpModalEl.classList.remove('open');
}

// Закрываем модальное окно "Sign in" и открываем - "Sign up".
function handleClickOnSingUpSecondCloseBtn() {
  signInModalWindowEl.style.display = 'none';
  signUpModalWindowEl.style.display = 'block';
}

// Замена кнопки "Sign in" в "хедере" на "UserBar" авторизованного пользователя.
export function userLogIn() {
  userBarMenu.classList.remove('user-out');
  singUpBtn.classList.add('user-in');
}

// Замена "UserBar" авторизованного пользователя в "хедере" на кнопку "Sign in".
export function userLogOut() {
  userBarMenu.classList.add('user-out');
  singUpBtn.classList.remove('user-in');
}

// Открываем "UserBar" у авторизованного пользователя.
function openUserBarMenu() {
  logOutMenu.classList.toggle('logout-menu');
}


//! Нужно исправить:
// 1. Нужно что-то делать с "рефами", мусорка в коде.
// 2. Много слушателей "навешал" и ни одного не убрал.
// 3. При переключение с "Sign in" на "Sign up" происходит резкий переход.
// 4. С мобильным меню БЕДА, нет ни меню, ни кнопок, ни алгоритмов...
