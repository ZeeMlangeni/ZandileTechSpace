import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const elements = document.querySelectorAll(".services__content");

    // Here its dynamic delays
    elements.forEach((el, index) => {
      const delay = (index + 1) * 200;
      el.style.setProperty("--delay", `${delay}ms`);
    });

    //Observer Logic
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
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

  return null;
};

export default ScrollAnimation;
