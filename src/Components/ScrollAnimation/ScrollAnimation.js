import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const elements = document.querySelectorAll('.services__content');

    // Set dynamic delays
    elements.forEach((el, index) => {
      const delay = (index + 1) * 200; // Customize the delay as needed
      el.style.setProperty('--delay', `${delay}ms`);
    });

    // Observer options
    const observerOptions = {
      root: null, // Use viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove class when out of view to re-trigger animation
        }
      });
    }, observerOptions);

    // Observe each hidden element
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // This component doesn't render any visual content itself
};

export default ScrollAnimation;
