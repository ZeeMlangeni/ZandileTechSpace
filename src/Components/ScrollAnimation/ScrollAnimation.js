import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

const ScrollAnimation = () => {
  useEffect(() => {
    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper", // Wrapper ID for the scrollable content
      content: "#content", // Content ID that holds your page content
      smooth: 1, // Adjust smoothness (increase for smoother scroll)
      normalizeScroll: true, // Prevents address bar from showing/hiding
      ignoreMobileResize: true, // Skips ScrollTrigger.refresh() on mobile resizes
      effects: true, // Enables the scroll-triggered effects for smooth scrolling
      preventDefault: true // Prevents default scrolling behavior
    });

    // Cleanup on component unmount
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="content">
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default ScrollAnimation;
