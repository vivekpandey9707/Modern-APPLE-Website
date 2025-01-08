import React, { useEffect } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { yellowimg } from '../src/index';

gsap.registerPlugin(Flip, ScrollTrigger);

const App = () => {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger-section",  // section where scroll will trigger
        start: "top center",          // when this section's top hits the center of viewport
        end: "bottom top",            // when this section's bottom hits the top of viewport
        scrub: 1,  
        duration:2,                   // smoothly scrubs the animation as the user scrolls
        onEnter: () => t1.play(),     // play the timeline when entering from the top
        onLeaveBack: () => t1.reverse(), // reverse the timeline when scrolling back up
      },
    });

    t1.to("#pink", {
      x: 600,
      y: 270,
      rotation: Math.PI,
      
    })
    .to("#pink", {
      x: 100,
      y: 520,
      rotation: 0,
      duration: 3,
    });
  }, []);

  return (
    <>
      <div className="bg-black w-[100vw] h-[50vh]">
        <div className="flex">
          <img id="pink" className="bg-black" src={yellowimg} width={100} alt="pink" />
        </div>
      </div>

      <div id="trigger-section" className="bg-red-500 w-[100vw] h-[50vh]"></div>
      <div className="bg-cyan-500 w-[100vw] h-[50vh]"></div>
    </>
  );
};

export default App;
