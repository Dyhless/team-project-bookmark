const html = document.querySelector('html');
const themeToggle = document.querySelector('#switch');



themeToggle.addEventListener('change', onToggleTheme);

function onToggleTheme(evt) {
    evt.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
    addDarkClassToHTML();
};

function addDarkClassToHTML() {
try {
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
    
    }
    else {
      html.classList.remove('dark');
   
    }
  } catch (err) { }

};