// Dark / light theme

let isDark = document.documentElement.getAttribute('data-theme') === 'dark';

function applyTheme(isThemeDark) {
  isDark = isThemeDark;
  document.documentElement.setAttribute(
    'data-theme',
    isThemeDark ? 'dark' : 'light',
    // NOTE: do NOT mutate button.innerHTML here — icons should be embedded in HTML and toggled via CSS.
  );
}

function toggleTheme() {
  isDark = !isDark;
  applyTheme(isDark);
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (e) {
    // if localStorage is unavailable
    console.warn('Failed setting local storage item:', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // !!! IMPORTANT !!! SET BUTTON
  const colorSchemeBtn = document.querySelector('');
  // synchronize UI with preset attribute

  if (colorSchemeBtn) {
    // Set aria-pressed / aria-label upon current state
    colorSchemeBtn.setAttribute('aria-pressed', String(isDark));
    colorSchemeBtn.setAttribute(
      'aria-label',
      isDark ? 'Przełącz motyw na jasny' : 'Przełącz motyw na ciemny',
    );

    colorSchemeBtn.addEventListener('click', () => {
      toggleTheme();
      // Update aria after switch
      colorSchemeBtn.setAttribute('aria-pressed', String(isDark));
      colorSchemeBtn.setAttribute(
        'aria-label',
        isDark ? 'Przełącz motyw na jasny' : 'Przełącz motyw na ciemny',
      );
    });
  }
});
