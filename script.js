const btn = document.querySelector('.hamburger__button');
const bg = document.querySelector('.hamburger__background');
const nav = document.querySelector('.hamburger__nav');
btn.addEventListener('click', () => {
	bg.classList.toggle('hamburger__background--active');
	nav.classList.toggle('hamburger__nav--active');
});
