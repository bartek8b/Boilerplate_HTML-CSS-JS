// Header visible on scroll

// !important SET HEADER POSITION STICKY, TOP: 0, cannot be in wrapper, must be direct cody ancestor. Add class header-hidden{transform: translateY(-100%)}

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	let scrollToTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollToTop > lastScrollTop && scrollToTop > 100) {
		header.classList.add('header-hidden');
	} else {
		header.classList.remove('header-hidden');
	}

	lastScrollTop = scrollToTop <= 0 ? 0 : scrollToTop;
});