import React from "react";
import "./SvgTest.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

const SvgTest = () => {
  
  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
    // gsap code here

    // timeline 1
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#track",
        start: 0,
        end: "+=500%+=50px",
        // end: '+=' + ((window.innerHeight * 3) + 50),
        scrub: true,
        markers: true,
      },
    });

    tl.to("#cloud", {
      duration: 1,
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
      },
    });
  });

  return (
    <>
      <div id="track" style={{height: "100vh"}}>
        <img
          src="src/assets/Cloud.png"
          alt="Cloud"
          id="cloud"
        />

        <svg
          viewBox="0 0 1489 6662"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          id="svg-path"
        >
          <path
            id="path"
            d="M1488 0.5C1165 123 434.3 452.7 95.5 791.5C-243.3 1130.3 405 1620.67 771.5 1823.5V6662"
            stroke="red"
          />
        </svg>

        <section className="section-1"></section>
        <section className="section-2"></section>
        <section className="section-3"></section>
        <section className="section-4"></section>
        <section className="section-5"></section>
        
      </div>

    


    </>
  );
};

export default SvgTest;
