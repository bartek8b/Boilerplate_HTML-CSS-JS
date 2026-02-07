// Intersection Observer

// Set proper nodes selection & set visibility in CSS
const nodes = document.querySelectorAll(
  '',
);

const oneTimeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        oneTimeObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px 0px 0px 0px',
  },
);

const constantObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    rootMargin: '0px 0px 0px 0px',
  },
);

nodes.forEach((elem) => oneTimeObserver.observe(elem));
