import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./JaiCloudAnimation.css";

function JaiCloudAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define the timeline
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second",
        start: "0% 90%",
        end: "20% 10%",
        scrub: true,
        markers: true,
      },
    });

    // Add animation steps to the timeline
    tl.to(
      "#cloud",
      {
        top: "90%",
        right: "90%",
        duration: 5,
      },
      "cloud"
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".second",
        start: "90% 90%",
        end: "100% 10%",
        scrub: true,
        markers: true,
      },
    });

      
    tl2.to(
      "#cloud",
      {
        top: "270%",
        right: "50%",
        duration: 2,
      },
      "cloud"
    );
  }, []);

  return (
    <>
      <div className="w-screen h-screen">
        <div
          className="w-full zero"
          style={{ height: "100px", background: "black" }}
        ></div>
        <div
          className="w-full first"
          style={{ height: "500px", background: "#05ff47" }}
        >
          <img
            src="src/assets/Cloud.png"
            style={{ height: "100px" }}
            alt="Cloud"
            id="cloud"
          />
        </div>
        <div
          className="w-full second"
          style={{ height: "500px", background: "blue" }}
        ></div>
        <div
          className="w-full third"
          style={{ height: "500px", background: "yellow" }}
        ></div>
        <div
          className="w-full fourth"
          style={{ height: "500px", background: "#d800ff" }}
        ></div>
        <div
          className="w-full fifth"
          style={{ height: "500px", background: "#00e7ff" }}
        ></div>
      </div>
    </>
  );
}

export default JaiCloudAnimation;
