const hamburgerBtn = document.querySelector('.hamburger-btn');
const mainNav = document.querySelector('.main-nav');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});
