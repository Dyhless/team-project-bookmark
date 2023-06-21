// Подключаем библиотеку "Notiflix".
// import { Notify } from 'notiflix';

// Подключаем библиотеку "Firebase" и сразу вынимаем из нее нужные переменные.
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

// Импортируем функцию "getShoppingList" из "firebase-servise.js".
import { getShoppingList } from './firebase-servise';

// Импортируем функцию "userLogIn" из "authorization-form.js".
import { userLogIn } from '../modal-login/authorization-form';

//! Переменная-ссылка на HTML элемент - кнопку или ссылку в "хедере" -> "Shopping List".
// const shoppingListPage = document.querySelector('#navigation-link-shopping');

// Переменная-ссылка на тег-инпут с именем пользователя в модальном окне авторизации.
const userName = document.getElementById('user-name');

//! Пустая переменная.
const isLogin = JSON.parse(localStorage.getItem('token'));


//! Конфигурация "Firebase" из демо-примера, заменить на свой.
const firebaseConfig = {
  apiKey: 'AIzaSyCq9mOndO3g-rUoq_LhFsLf4QY5_4L9fkc',
  authDomain: 'books-314f3.firebaseapp.com',
  databaseURL:
    'https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'books-314f3',
  storageBucket: 'books-314f3.appspot.com',
  messagingSenderId: '627795944798',
  appId: '1:627795944798:web:853f1b3c49bede1282dbcf',
  measurementId: 'G-L8HC0K2SWK',
};

// Инициализация "Firebase" на основе -> переменной-объекта "firebaseConfig".
const app = initializeApp(firebaseConfig);

// Инициализация доп. модуля "Firebase".
const analytics = getAnalytics(app);

// Инициализация пути авторизации.
const auth = getAuth();

// Запуск авторизации
onAuthStateChanged(auth, user => {
  if (user) {
    userLogIn();
    // if (isLogin) {
    //   shoppingListPage.classList.remove('is-hidden');
    // }

    return (userName.textContent = user.displayName);
  } else {
    // console.log('User is signed out');
  }
});

// Создание нового аккаунта.
export function createUser(userEmail, userPassword, displayName) {
  createUserWithEmailAndPassword(auth, userEmail, userPassword, displayName)
    .then(userCredential => {
      updateProfile(auth.currentUser, {
        displayName,
      });
      onUserLogin(userCredential, displayName);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// Подключение СУЩЕСТВУЮЩЕГО в базе аккаунта.
function onUserLogin(userCredential, displayName) {

  //! Делаем НЕ видимой ссылку "Shopping List" в хедере.
  // shoppingListPage.classList.add('is-hidden');

  const userUid = userCredential.user.uid;
  const idToken = userCredential.user.accessToken;
  localStorage.setItem('token', JSON.stringify(idToken));
  localStorage.setItem('uid', JSON.stringify(userUid));
  localStorage.setItem('userName', displayName);
  return (userName.textContent = displayName);
}

// Вход пользователя в аккаунт.
export function onLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const displayName = userCredential.user.displayName;

      //! Делаем видимым ссылку "Shopping List" в хедере.
      // shoppingListPage.classList.remove('is-hidden');

      onUserLogin(userCredential, displayName);
      getShoppingList().then(shoppingList => {
        if (shoppingList === null) {
          return;
        }
        const books = Object.keys(shoppingList);
        const list = [];
        for (const key of books) {
          list.push(shoppingList[key]);
        }
        list.map(el => {
          const listFromServer = [...el];
          const listLocalStorage = JSON.parse(
            localStorage.getItem('storage-of-books')
          );
          if (listLocalStorage !== null) {
            const newBooksList = [];
            for (el of listLocalStorage) {
              const idEl = el._id;
              // console.log(idEl);
              const filtredList = listFromServer.every(
                book => book._id !== idEl
              );
              if (filtredList) {
                newBooksList.push(el);
              }
              const allBooks = [...listFromServer, ...newBooksList];
              localStorage.setItem(
                'storage-of-books',
                JSON.stringify(allBooks)
              );
            }
            return;
          }
          const listJson = JSON.stringify(listFromServer);
          localStorage.setItem('storage-of-books', listJson);
        });
      });
      return (refs.userName.textContent = displayName);
    })
    .catch(error => {
      // Notify.failure('This user account does not exist');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// Выход пользователя из аккаунта.
export function onLogOut() {
  signOut(auth)
    .then(() => {
      localStorage.setItem('uid', null);
      localStorage.setItem('token', null);
      localStorage.setItem('storage-of-books', null);
      localStorage.setItem('userName', null);

      //! Делаем НЕ видимым ссылку "Shopping List" в хедере.
      // shoppingListPage.classList.add('is-hidden');

      return (refs.userName.textContent = '');
    })
    .catch(error => {
      // console.log(error.message);
    });
}