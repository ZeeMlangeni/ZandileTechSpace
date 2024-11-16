import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll'); // Target all sections that need animations
    const sectionsLeft = document.querySelectorAll('.animate-on-scroll-left'); // Left slide sections
    const sectionsRight = document.querySelectorAll('.animate-on-scroll-right'); // Right slide sections

    const handleScroll = () => {
      const top = window.scrollY; // Get current scroll position

      // For all sections with basic fade-in
      sections.forEach((sec) => {
        const offset = sec.offsetTop; // Get position of section
        const height = sec.offsetHeight; // Get height of section

        if (top >= offset - 150 && top < offset + height) {
          sec.classList.add('show-animate'); // Add animation class when in view
        } else {
          sec.classList.remove('show-animate'); // Remove when out of view
        }
      });

      // For sections sliding in from left
      sectionsLeft.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset - 150 && top < offset + height) {
          sec.classList.add('show-animate-left');
        } else {
          sec.classList.remove('show-animate-left');
        }
      });

      // For sections sliding in from right
      sectionsRight.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset - 150 && top < offset + height) {
          sec.classList.add('show-animate-right');
        } else {
          sec.classList.remove('show-animate-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return null; // This component does not render anything to the UI
};

export default ScrollAnimation;
