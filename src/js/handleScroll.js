export default function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchImages(); // заменить эту функцию на свою
  }
}
window.addEventListener('scroll', handleScroll);
