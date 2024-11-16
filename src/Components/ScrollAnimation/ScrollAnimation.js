import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.5 });

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
