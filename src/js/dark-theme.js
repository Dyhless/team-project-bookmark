const html = document.querySelector('html');
const themeToggle = document.querySelector('#switch');

themeToggle.addEventListener('change', onToggleTheme);

// 1.При першому завантаженні сторінки перевіряє, яка тема збережена в ЛС, якщо темна, то ставить перемикач теми в
// відповідне положення
window.addEventListener('DOMContentLoaded', () => {
  // Отримуємо збережену тему з LS
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
  
  // Сінхронізуємо тему, встановлену у користувача в ОС, з темою сайту, якщо нічого не записано в LS
  syncThemeWithOS();
});

// Функція, яка викликається при кліку на світчер, викликає функцію додавання/видалення атрибуту темної теми
// Якщо в ЛС записана темна тема, то її видаляємо при кліку на світчер і встановиться тема за змовченням - світла
function onToggleTheme(evt) {
  if (themeToggle.checked) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.removeItem('theme');
  }
}

// Функція для встановлення теми
function applyTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
}

// Функція синхронізації теми з ОС користувача з темою сайту
function syncThemeWithOS() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDarkMode && !themeToggle.checked) {
    onToggleTheme();
  } else if (!prefersDarkMode && themeToggle.checked) {
    onToggleTheme();
  }
}