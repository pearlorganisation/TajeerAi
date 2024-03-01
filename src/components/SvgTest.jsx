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
        trigger: "#path1",
        start: "10% center",
        end: "bottom center",
        // end: '+=' + ((window.innerHeight * 3) + 50),
        scrub: true,
        markers: true,
      },
    });

    tl.to("#cloud", {
      duration: 1,
      ease: "none",
      motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
      },
    });

    // timeline 2
   let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#path1",
      start: "bottom center",
      endTrigger: "#track",
      end: "bottom center",
      // end: "bottom center",
      // end: '+=' + ((window.innerHeight * 3) + 50),
      scrub: true,
      markers: true,
    },
  });

  tl2.to("#cloud", {
    duration: 5,
    ease: "none",
    motionPath: {
      path: [
        { y: '200vh'}, 
        { y: '250vh'}, 
        { y: '300vh' }, 
        { y: '350vh'},
        { y: '400vh'},
        { y: '450vh'},
        { y: '500vh'},
      ],
    },
  });


  });


   
  return (
    <>
      <img src="src/assets/Cloud.png" alt="Cloud" id="cloud" />
      <div id="track">
        <nav className="h-32"></nav>
        <section className="section-1">
          <svg
            viewBox="0 0 1577 1043"
            fill="none"
            // preserveAspectRatio="xMidYMax meet"
          >
            <path
              id="path1"
              d="M1576 1C1150.83 33.6667 248.8 192.5 42 566.5C-216.5 1034 819.5 941.5 819.5 1043"
              stroke="red"
            />
          </svg>
          

        </section>
        <section className="section-2">
          
        </section>
        <section className="section-3"></section>
        <section className="section-4"></section>
        <section className="section-5"></section>
      </div>
    </>
  );
};

export default SvgTest;
