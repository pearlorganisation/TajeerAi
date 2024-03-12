import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cloud from "../assets/Cloud.png";
import ThunderBolt from "../assets/ThunderBolt.png";
import Thunder from "../assets/Bolt.mp4";
import OnBlub from "../assets/OnBlub.png";
import OffBlub from "../assets/OffBlub.png";

// import "../App.css"; // Import your CSS file for styling

const CloudAnimation = () => {
  const cloudRef = useRef(null);
  const videoRef = useRef(null);
  const thunderBoltRef = useRef(null);
  const thunderBoltWrap = useRef(null);
  const onBulb = useRef(null);
  const offBlub = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cloudRef.current,
        start: "top top",
        end: "bottom+=100vh top",
        scrub: 1,
      },
    });

    tl.to(cloudRef.current, {
      x: "-=80vw", // move to left
      y: "+=60vh", // move down slightly
      //   backgroundColor: "#f6f6f6", // start white
      // filter:
      //   "drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.2)) drop-shadow(0px 0px 50px #fff5)",
      duration: 1,
      onComplete: () => {
        console.log("Completed");
      },
    })
      .to(cloudRef.current, {
        x: "+=42vw", // move to bottom-right
        y: "+=50vh",
        //   backgroundColor: "#808080", // turn gray
        // filter: "drop-shadow(10px 10px 15px rgba(28,163,236))",
        duration: 2,
        scale: 1.2,
        onComplete: () => {
          videoRef.current.classList.remove("hidden");
          videoRef.current.play();
        },
        onReverseComplete: () => {
          // Hide the video when animation reverses
          videoRef.current.pause();
          videoRef.current.classList.add("hidden");
        },
      })
      .to(cloudRef.current, {
        x: "+=0vw",
        y: "-=40vh",
        duration: 2,
        scale: 1.2,

        onComplete: () => {
          gsap.to(cloudRef.current, {
            y: "+=80vh",
            scale: 0,
            duration: 0.5, // Adjust the duration as needed
          });
        },
      });

    // BOLT
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: thunderBoltRef.current,
        start: "top top",
        end: "bottom+=100vh top",
        scrub: 1,
      },
    });

    tl2.from(thunderBoltRef.current, {
      x: "-=0vw", // move to left
      y: "-=0vh", // move down slightly
    });
    tl2.to(thunderBoltRef.current, {
      x: "-=0vw", // move to left
      y: "+=90vh", // move down slightly
      scale: 1.2,
      onComplete: () => {
        gsap.to(thunderBoltRef.current, {
          scale: 0, // scale down to original size
          duration: 0.5,
        });
        // Hide bulb1 and show bulb2 when animation completes
        gsap.set(offBlub.current, { display: "none" });
        gsap.set(onBulb.current, { display: "flex" });
      },
    });
  }, []);

  return (
    <div className="cloud-container">
      <div style={{ height: "200vh" }}>
        <div ref={cloudRef} className={`cloud`}>
          <style jsx>{`
            .dropShadow {
              filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.2));
            }
          `}</style>
          <div style={{ position: "relative" }} className="">
            <img className="dropShadow" src={Cloud} alt="" />
          </div>
          <video
            ref={videoRef}
            className="absolute bottom-[-14rem] -z-10 hidden"
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/lightning-strike-10864701-8797446.mp4"
            type="video/mp4"
            autoplay="autoplay"
            loop="loop"
          ></video>
        </div>
      </div>{" "}
      <div
        ref={thunderBoltWrap}
        className="flex justify-center border items-start"
        style={{ height: "100vh" }}
      >
        <div ref={thunderBoltRef}>
          <img className=" mx-auto" src={ThunderBolt} alt="" />
        </div>
      </div>
      <div>
        <div ref={offBlub} className="w-full grid place-items-center">
          <img className=" mx-auto w-[12rem]" src={OffBlub} alt="" />
        </div>
        <div ref={onBulb} className="w-full hidden justify-center items-center">
          <img className=" mx-auto w-[12rem]" src={OnBlub} alt="" />
        </div>
      </div>
      {/* Extra height to enable scrolling */}
    </div>
  );
};

export default CloudAnimation;
