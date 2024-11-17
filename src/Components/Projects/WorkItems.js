import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Imported ScrollTrigger




gsap.registerPlugin(ScrollTrigger); 

const WorkItems = ({ item }) => {
  useEffect(() => {
    // this is a GSAP ScrollTrigger animation for skew effect
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".work__card", "skewY", "deg"), 
        clamp = gsap.utils.clamp(-20, 20); 

    ScrollTrigger.create({
      trigger: ".work__card", 
      start: "top bottom", 
      end: "bottom top", 
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300); 
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0, 
            duration: 0.8, 
            ease: "power3", 
            overwrite: true, 
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      },
      toggleActions: "play none none none", 
    });

 
    gsap.set(".work__card", { transformOrigin: "right center", force3D: true });

    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='card-inner' key={item.id}>   
    
      <div className='work__card'>
        <img 
          src={item.image || 'default-image.jpg'} 
          alt={item.name} 
          className='work__img' 
        />
        <h3 className='work__title'>{item.name}</h3>

        {/* Description Block */}
        <div className="work__details">
          <p className="work__description">{item.description}</p>
          <p className="work__role"><strong>Role:</strong> {item.role}</p>
          <p className="work__category"><strong>Category:</strong> {item.category}</p>
          <p className="work__technologies"><strong>Technologies:</strong> {item.technologies}</p>
        </div>

        {item.repoLink && (
          <a href={item.repoLink} className='work__button'>
            Git Repo <i className="uil uil-arrow-right work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
