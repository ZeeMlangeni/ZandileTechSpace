import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const elements = document.querySelectorAll('.services__content');

    // Set dynamic delay based on index of each element
    const setDynamicDelays = () => {
      elements.forEach((el, index) => {
        const delay = (index + 1) * 200; // Adjust the delay as needed
        el.style.setProperty('--delay', `${delay}ms`); // Using CSS variable
      });
    };

    // Run delay setting when the component is mounted
    setDynamicDelays();

    // Observer options for IntersectionObserver
    const observerOptions = {
      root: null, // viewport as root
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of element is visible
    };

    // Intersection Observer to observe when elements come into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing after it is shown
        }
      });
    }, observerOptions);

    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // This component doesn't render any visual content itself
};

export default ScrollAnimation;
