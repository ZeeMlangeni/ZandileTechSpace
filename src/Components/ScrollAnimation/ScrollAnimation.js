import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll'); // Target sections that need animation

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset - 150 && top < offset + height) { // Adding offset for early animation trigger
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn’t render anything visually.
};

export default ScrollAnimation;
