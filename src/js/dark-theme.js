const html = document.querySelector('html');
const themeToggle = document.querySelector('#switch');

themeToggle.addEventListener('change', onToggleTheme);

// Перевіряємо, яка тема збережена в Local Storage при першому завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  // Отримуємо збережену тему з Local Storage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
  
  // Сінхронізуємо тему, встановлену у користувача в ОС, з темою сайту, якщо нічого не записано в Local Storage
  // syncThemeWithOS();
});

// function onToggleTheme(evt) {
//   if (themeToggle.checked) {
//     applyTheme('dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     applyTheme('light');
//     localStorage.removeItem('theme');
//   }
// }

// Функція для встановлення теми
function applyTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
}

// Функція синхронізації теми з ОС користувача з темою сайту
// function syncThemeWithOS() {
//   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
//   if (prefersDarkMode && !themeToggle.checked) {
//     onToggleTheme();
//   } else if (!prefersDarkMode && themeToggle.checked) {
//     onToggleTheme();
//   }
// }



// інший варіант

function onToggleTheme(evt) {
  if (themeToggle.checked) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.removeItem('theme');
  }
}

// Функція синхронізації теми з ОС користувача з темою сайту
function syncThemeWithOS() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Отримуємо збережену тему з Local Storage
  const savedTheme = localStorage.getItem('theme');

  if (prefersDarkMode && savedTheme !== 'dark' && !themeToggle.checked) {
    // Якщо тема ОС - темна, в Local Storage не збережена темна тема і перемикач теми не встановлений, то встановлюємо темну тему
    themeToggle.checked = true;
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else if (!prefersDarkMode && savedTheme === 'dark' && themeToggle.checked) {
    // Якщо тема ОС - світла, в Local Storage збережена темна тема і перемикач теми встановлений, то встановлюємо світлу тему
    themeToggle.checked = false;
    applyTheme('light');
    localStorage.removeItem('theme');
  }
}






