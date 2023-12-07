document.querySelector('.card__button').addEventListener('click', () => {
  document.querySelector('.popup').classList.add("show");
});

document.querySelector('.popup__box--icon').addEventListener('click', () => {
  document.querySelector('.popup').classList.remove("show");
});

document.querySelectorAll('.redirect').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (confirm('Přejít na stránku produktu na lenovo.com?')) {
      window.location.href = 'https://www.lenovo.com/cz/cs/tablets/android-tablets/lenovo-tab-series/Lenovo-Tab-P12/p/LEN103L0018';
    }
  });
});