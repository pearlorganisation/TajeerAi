import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./JaiCloudAnimation.css";

function JaiCloudAnimation() {
  const cloudRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cloudRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true
      },
    });

    tl.to(cloudRef.current, {
      x: "-80vw",
      y: "80vh",
      duration: 2,
      onStart: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });

    ScrollTrigger.create({
      trigger: cloudRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        if (!isAnimating) {
           // Smooth scroll to the desired position
           smoothScrollTo(cloudRef.current, window.innerHeight);
        }
      },
    });
  }, [isAnimating]);


   // Function for smooth scrolling
   const smoothScrollTo = (target, offset) => {
    gsap.to(window, {
      duration: 1, // Adjust as needed
      scrollTo: {
        y: target.offsetTop - offset,
        autoKill: false,
      },
    });
  };

  return (
    <div className="App">
      <h1>GSAP Cloud Animation</h1>
      <div className="content">
        <h3 ref={cloudRef} class="cloud">
          <img
            src="src/assets/Cloud.png"
            style={{ height: "100px" }}
            alt="Cloud"
          />
        </h3>
        
      </div>
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default JaiCloudAnimation;
