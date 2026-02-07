// =====================
//    HAMBURGER MENU
// =====================

// !!!important nav.show in .css must switch display to: flex;
// nav.show {
//     display: flex;
//     animation: anim.-in;
//   }
//   nav.hide {
//     animation: anim.-out;
//   }

// !!!important SET SELECTIORS
const openNav = document.querySelector('');
const closeNav = document.querySelector('');
const nav = document.querySelector('');

function setNavFocusable(isOpen) {
  // Accessibility attributes
  openNav.setAttribute('aria-expanded', String(isOpen));
  nav.setAttribute('aria-hidden', String(!isOpen));

  // "inert" blocks tab focus and user interaction
  nav.inert = !isOpen;
}

function updateWidth() {
  const windowWidth = window.innerWidth;
  closeNav.style.display = 'none';
  if (windowWidth > 768) {
    nav.style.display = 'flex';
    openNav.style.display = 'none';
    setNavFocusable(true);
  } else {
    nav.style.display = 'none';
    openNav.style.display = 'flex';
    setNavFocusable(false);
  }
}

openNav.addEventListener('click', () => {
  openNav.style.display = 'none';
  closeNav.style.display = 'flex';
  // !!!important SET PROPER CLASS NAME
  nav.style.display = 'flex';
  nav.classList.remove('');
  nav.classList.add('');

  setNavFocusable(true);

  // Focus on first interactive element: <a> or <button> inside nav
  const focusable = Array.from(nav.querySelectorAll('a, button'));
  const firstNavItem = focusable.find(
    (el) => el.offsetParent !== null && !el.disabled,
  );
  if (firstNavItem) firstNavItem.focus();
});

closeNav.addEventListener('click', () => {
  openNav.style.display = 'flex';
  closeNav.style.display = 'none';
  // !!!important SET PROPER CLASS NAME
  nav.classList.remove('');
  nav.classList.add('');

  setNavFocusable(false);

  openNav.focus();
});

// Escape btn closes menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    if (openNav.getAttribute('aria-expanded') === 'true') {
      closeNav.click();
    }
  }
});

window.addEventListener('resize', updateWidth);
window.addEventListener('scroll', updateWidth);

// IMPORTANT: initialize state on page load
updateWidth();

// ========================================
// FOCUS TRAP (when hamburger menu open)
// ========================================

function trapFocus(e) {
  // Run only on mobile and only when menu is open
  // !!!important SET PROPER CLASS NAME
  if (!nav.classList.contains('') || window.innerWidth > 768) return;

  // Catch all visible <a> & <button> in nav
  const focusable = Array.from(nav.querySelectorAll('a, button')).filter(
    (el) => el.offsetParent !== null && !el.disabled,
  );

  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  // "Tab" trap
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      // shift+tab = back
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // tab = forward
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

nav.addEventListener('keydown', trapFocus);
