const html = document.querySelector('html');
const themeToggle = document.querySelector('#switch');


themeToggle.addEventListener('change', onToggleTheme);


// 1.При першому завантаженні сторінки перевіряє, яка тема збережена в ЛС, якщо темна, то ставить перемикач теми в 
// відповідне положення
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
  }
  // сінхронізує тему, встановлену у користувача в ОС, з темою сайту, якщо в ЛС нічого не записано
  syncThemeWithOS();
});

// Функція, яка викликається при кліку на світчер, викликає функцію додавання/видалення атрибуту темної теми
// Якщо в ЛС записана темна тема, то її видаляємо при кліку на світчер і встановиться тема за змовченням - світла
// Якщо нічого немає в ЛС, тоді записуємо тему темну 
function onToggleTheme(evt) {
  // evt.preventDefault();
  addDarkAttribute();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Додає атрибут темної теми до html
// Якщо атрибут вже є, його видяляємо, якщо немає - додаємо
function addDarkAttribute() {
  if (html.hasAttribute('data-theme')) {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
}

// Функція сінхронізації теми сайту з ЛС після перезавантаження 
function syncThemeWithLocalStorage() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    addDarkAttribute();
    themeToggle.checked = true;
  }
}

// Функція синхронізації теми з ОС користувача з темой сайту
function syncThemeWithOS() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode && !themeToggle.checked) {
    onToggleTheme();
  } else if (!prefersDarkMode && themeToggle.checked) {
    onToggleTheme();
  }
}

syncThemeWithLocalStorage();