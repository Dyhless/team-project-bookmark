document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
   
      const activeLink = document.querySelector('.link.active-nav');
      if (activeLink) {
        activeLink.classList.remove('active-nav');
      }

      link.classList.add('active-nav');
    });
  });

  const currentPageLink = document.querySelector('.link[href="' + window.location.pathname + '"]');
  if (currentPageLink) {
    const oval = currentPageLink.querySelector('.oval');
    currentPageLink.classList.add('active-nav');
  } else {
    const defaultPageLink = document.querySelector('.link');
    defaultPageLink.classList.add('active-nav');
  }
});
