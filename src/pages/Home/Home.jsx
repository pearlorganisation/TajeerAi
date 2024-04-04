import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.css";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { Link } from "react-router-dom";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const Home = () => {
  // states
  const [showSideThunder, setShowSideThunder] = useState(false);
  const [showCenterThunder, setShowCenterThunder] = useState(false);
  const [thunderAnimation1, setThunderAnimation1] = useState(false);
  const [thunderAnimation2, setThunderAnimation2] = useState(false);
  const [thunderAnimation2Shake, setThunderAnimation2Shake] = useState(false);
  const [thunderAnimation3, setThunderAnimation3] = useState(false);
  const [bulbOn, setBulbOn] = useState(false);
  const [showBulb, setShowBulb] = useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [mounted, setMounted] = useState(false);

  // refs
  const cloudRef = useRef(null);
  const section5ref = useRef();
  const section6ref = useRef();
  const section7ref = useRef();
  const section8ref = useRef();
  const section9ref = useRef();

  const section11ref = useRef();

  useLayoutEffect(() => {
    if (mounted && shouldScroll) {
      // Add a condition to check if scrolling is required
      cloudRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mounted, shouldScroll]); // Include shouldScroll in the dependency array

  useEffect(() => {
    setMounted(true);
  }, []);

  // gsap code here

  useGSAP(() => {
    // timeline 1
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#path1",
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,

        onEnter: () => {
          // Remove the fixed positioning and centering styles
          gsap.set("#animated-element", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "1",
          });
        },

        onEnterBack: () => {
          // Remove the fixed positioning and centering styles
          gsap.set("#animated-element", {
            position: "",
            top: "",
            left: "",
            transform: "",
          });
        },
        onLeave: () => {
          gsap.set("#animated-element", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          });
        },
        onLeaveBack: () => {
          // Remove the fixed positioning and centering styles
          gsap.set("#animated-element", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "0",
          });
        },
      },
    });

    tl.to("#animated-element", {
      // duration: 1,
      ease: "none",
      motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
      },
    });

    gsap.to("#animated-element", {
      // duration:1,
      scrollTrigger: {
        trigger: ".section-5",
        start: "top top",
        end: "center center",
        scrub: true,
        // markers: true,
        onEnter: () => {
          section5ref.current.style.backgroundColor = "#747d89";
          setShowSideThunder(true);
          setShowCenterThunder(true);
          setThunderAnimation1(true);
          setThunderAnimation2(true);
          setThunderAnimation3(true);
        },
        onEnterBack: () => {
          setShowSideThunder(true);
          setShowCenterThunder(true);
          setThunderAnimation1(true);
          setThunderAnimation2(true);
          setThunderAnimation3(true);
        },
        onLeave: () => {
          setShowSideThunder(false);
          // setShowCenterThunder(false)
          setThunderAnimation1(false);
          // setThunderAnimation2(false);
          setThunderAnimation3(false);
        },
        onLeaveBack: () => {
          section5ref.current.style.backgroundColor = "#d1fae5";
          setShowSideThunder(false);
          setShowCenterThunder(false);
          setThunderAnimation1(false);
          setThunderAnimation2(false);
          setThunderAnimation3(false);
        },
      },
    });

    // vanishing cloud and side thunders timeline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        start: "center top",
        end: "bottom center",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setShowBulb(true);

          gsap.set("#thunder2", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "",
          });
        },
        onEnterBack: () => {
          console.log("enter back");
          setThunderAnimation2(true);
          setThunderAnimation2Shake(false);
          gsap.set("#thunder2", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "",
          });
        },
        onLeave: () => {
          // setShowCenterThunder(true);
          // setThunderAnimation1(false);
          setThunderAnimation2(false);
          setThunderAnimation2Shake(true);
          // setThunderAnimation3(false);
          // setThunderAnimation2(false);
          gsap.set("#thunder2", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: "1",
          });
        },
        // onLeaveBack: () => {

        //   setThunderAnimation2(true);
        //   setThunderAnimation2Shake(false);
        // }
      },
    });

    tl2.to("#cloud", {
      // duration: 1,
      opacity: 0,
      ease: "none",
    });

    tl2.to("#thunder1", {
      // duration: 1,
      opacity: 1,
      ease: "none",
    });

    tl2.to("#thunder2", {
      // duration: 1,
      scrub: true,
      // top: "50%",
      // transform: "translate(-50%. -50%)",
      height: "150px",
      ease: "none",
    });

    tl2.to("#thunder3", {
      // duration: 1,
      opacity: 0,
      ease: "none",
    });

    // decrease bolt size and vanish when it hits bulb

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-9",
        start: "top center",
        end: "center center",
        scrub: true,
        // markers: true,
        onLeave: () => {
          setBulbOn(true);
          section9ref.current.style.backgroundColor = "#fb9e44d1";
          // setThunderAnimation2(false);
          setShowCenterThunder(false);
          setThunderAnimation2Shake(false);
          gsap.set("#bulb-container", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          });
        },
        onEnterBack: () => {
          section9ref.current.style.backgroundColor = "#3a3d42";
          setBulbOn(false);
          // setThunderAnimation2(true);
          setShowCenterThunder(true);
          setThunderAnimation2Shake(true);
          gsap.set("#bulb-container", {
            position: "",
            top: "",
            left: "",
            transform: "translate(-50%, -50%)",
          });
        },
      },
    });

    tl3.to("#thunder2", {
      // duration:1,
      height: "50px",
      opacity: 0,
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-11",
        start: "top center",
        end: "center center",
        scrub: true,
        // markers: true,

        onEnter: () => {
          setShowBulb(false);
          gsap.set("#bulb-container", {
            opacity: 0,
          });
          gsap.set("#logo-container", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "block",
          });
          gsap.set("#tajerLogo", {
            opacity: 1,
          });

          setShowLogoAnimation(true);
        },
        onLeaveBack: () => {
          setShowBulb(true);
          gsap.set("#bulb-container", {
            opacity: 1,
          });
          gsap.set("#logo-container", {
            position: "",
            top: "",
            left: "",
            transform: "",
            display: "none",
          });
          gsap.set("#tajerLogo", {
            opacity: 1,
          });
          setShowLogoAnimation(false);
          section11ref.current.style.backgroundColor = "#a74c4c";
        },
      },
    });

    tl4.to(
      "#feature1",
      {
        duration: 10,
        opacity: 1,
        left: "-100%",
        top: "-20%",
      },
      "features"
    );

    tl4.to(
      "#feature2",
      {
        duration: 8,
        opacity: 1,
        left: "200%",
        top: "105%",
      },
      "features"
    );

    tl4.to(
      "#feature3",
      {
        duration: 10,
        opacity: 1,
        left: "200%",
        top: "-10%",
      },
      "features"
    );

    tl4.to(
      "#feature4",
      {
        duration: 11,
        opacity: 1,
        left: "-100%",
        top: "110%",
      },
      "features"
    );
  });

  // smash animation end for tajer logo
  const onAnimationEnd = () => {
    // Change the color of the parent div when the animation ends
    section11ref.current.style.backgroundColor = "#8a3d3d"; // Change this to the desired color
  };

  return (
    <>
      <div id="track">
        <section className="section-1">
          {/* animated elements */}
          <div id="animated-element" className="">
            <img src="/Cloud.png" alt="Cloud" id="cloud" ref={cloudRef} />
            <img
              src="/thunder1.png"
              id="thunder1"
              className={`${showSideThunder ? "" : "hidden"} ${
                thunderAnimation1 ? "thunder-animation1" : ""
              }`}
            />
            <img
              src="/thunder2.png"
              id="thunder2"
              className={`transition duration-100 ${
                showCenterThunder ? "" : "hidden"
              } ${thunderAnimation2 ? "thunder-animation2" : ""} ${
                thunderAnimation2Shake ? "thunder-animation2-shake" : ""
              }`}
            />
            <img
              src="/thunder3.png"
              id="thunder3"
              className={`${showSideThunder ? "" : "hidden"} ${
                thunderAnimation3 ? "thunder-animation3" : ""
              }`}
            />
          </div>
          <svg
            viewBox="0 0 1623 2685"
            fill="none"
            // preserveAspectRatio="xMidYMax meet"
          >
            <path
              id="path1"
              d="M1622.5 0.5C1589.67 150.667 1447.7 511.4 1142.5 753C837.3 994.6 549.667 1117.67 444 1149C345 1183.67 137.1 1275.8 97.5 1367C48 1481 -11.5 1515.5 3.50001 1911.5C15.5 2228.3 332.167 2390.17 489 2431.5C593 2464.5 806.9 2561.2 830.5 2684"
              stroke="red"
              strokeOpacity="0"
            />
          </svg>

          {/* scroll down animation */}
          <div className="mouse-container absolute bottom-0">
            <div className="field flex flex-col gap-2 font-semibold">
              <div className="mouse"></div>
              Start Scroll to begin
            </div>
          </div>
        </section>
        <section className="section-2 bg-gray-100 text-center">
          <div class="card w-[600px] h-[300px] flex flex-col justify-evenly  text-center absolute top-1/2 left-1/2 z-[999] -translate-x-1/2 -translate-y-1/2">
            <p className="text-7xl font-semibold">Hey partner!</p>
            <p className="text-6xl font-semibold inline-block text-transparent bg-clip-text gradient-text">
              Welcome to Tajer AI
            </p>
          </div>
        </section>
        <section className="section-3  bg-blue-100"></section>
        <section className="section-4 bg-emerald-200"></section>
        <section
          className="section-5  transition duration-500 "
          ref={section5ref}
        ></section>
        <section
          className="section-6 transition duration-300  bg-[#798089]"
          ref={section6ref}
        ></section>
        <section
          className="section-7 transition duration-300 bg-[#686f78] "
          ref={section7ref}
        ></section>
        <section
          className="section-8 transition duration-300 bg-[#4e535a]"
          ref={section8ref}
        ></section>
        <section
          className="section-9 realtive transition duration-300 "
          ref={section9ref}
        >
          <div
            id="bulb-container"
            className={`${
              showBulb ? "" : "hidden"
            } w-fit absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/3 z-[3] tranisiton duration-300`}
          >
            <svg
              id="bulb-svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 196 196" // Adjust viewBox to maintain aspect ratio
              enableBackground="new 0 0 196 196"
              xmlSpace="preserve"
            >
              <g id="bulb">
                <path
                  id="bulb_body"
                  className="transition duration-1000"
                  fill={`${bulbOn ? "#FFFF50" : "#FFFFFF"}`}
                  stroke={`${bulbOn ? "#FFFF50" : "#3D3D3D"}`}
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  d="M138,86.465c0-22.284-18.131-40.348-40.5-40.348c-22.367,0-40.5,18.064-40.5,40.348c0,13.2,6.363,24.918,16.201,32.279v12.91c0,1.781,1.449,3.229,3.238,3.229h42.12c1.789,0,3.24-1.445,3.24-3.229v-12.91C131.637,111.384,138,99.665,138,86.465z"
                />
                <g id="sockel">
                  <path
                    fill="#96BF1F"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M119.013,139.598c0,1.803-1.468,3.266-3.276,3.266H79.689c-1.81,0-3.276-1.463-3.276-3.266l0,0c0-1.805,1.468-3.267,3.276-3.267h36.046C117.545,136.331,119.013,137.793,119.013,139.598L119.013,139.598z"
                  />
                  <path
                    fill="#96BF1F"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M119.013,146.128
        c0,1.804-1.468,3.267-3.276,3.267H79.689c-1.81,0-3.276-1.463-3.276-3.267l0,0c0-1.804,1.468-3.267,3.276-3.267h36.046
        C117.545,142.861,119.013,144.324,119.013,146.128L119.013,146.128z"
                  />
                  <path
                    fill="#96BF1F"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M119.013,152.659
        c0,1.804-1.468,3.267-3.276,3.267H79.689c-1.81,0-3.276-1.463-3.276-3.267l0,0c0-1.804,1.468-3.267,3.276-3.267h36.046
        C117.545,149.395,119.013,150.855,119.013,152.659L119.013,152.659z"
                  />
                  <path
                    fill="#96BF1F"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M119.013,159.191
        c0,1.803-1.468,3.266-3.276,3.266H79.689c-1.81,0-3.276-1.463-3.276-3.266l0,0c0-1.805,1.468-3.267,3.276-3.267h36.046
        C117.545,155.926,119.013,157.389,119.013,159.191L119.013,159.191z"
                  />
                  <path
                    fill="none"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    d="M89.111,168.988c0,4.093,3.851,7.41,8.602,7.41
        c4.75,0,8.603-3.317,8.603-7.41"
                  />
                  <path
                    fill="none"
                    stroke="#3D3D3D"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    d="M81.116,162.457v3.266
        c0,1.805,1.467,3.267,3.275,3.267h4.72h17.203h4.293c1.809,0,3.275-1.464,3.275-3.267v-3.266"
                  />
                  {/* More path elements for sockel */}
                </g>

                {/* More elements for bulb */}
              </g>
              <g id="licht" style={{ opacity: `${bulbOn ? "1" : "0"}` }}>
                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="151.088"
                  y1="90.5"
                  x2="172"
                  y2="90.5"
                />
                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="25"
                  y1="90.5"
                  x2="45.912"
                  y2="90.5"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="135.392"
                  y1="128.327"
                  x2="150.765"
                  y2="141.677"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="46.234"
                  y1="39.322"
                  x2="61.607"
                  y2="52.673"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  strokeOpacity="0"
                  x1="97.5"
                  y1="143.996"
                  x2="97.5"
                  y2="162.876"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="97.5"
                  y1="18.124"
                  x2="97.5"
                  y2="37.004"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="59.607"
                  y1="128.327"
                  x2="46.234"
                  y2="141.677"
                />

                <line
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  x1="148.765"
                  y1="39.322"
                  x2="135.392"
                  y2="52.672"
                />
              </g>
            </svg>
          </div>
        </section>
        <section className="section-10"></section>
        <section className="section-11 relative" ref={section11ref}>
          <div
            id="logo-container"
            className="w-fit absolute left-[50%] -translate-x-1/2"
          >
            <img
              src="/logo-light.png"
              id="tajerLogo"
              style={{ width: "200px", opacity: "0", zIndex: "10" }}
              className={`relative transition duration-700  ${
                showLogoAnimation ? "logoAnimation" : ""
              }`}
              onAnimationEnd={onAnimationEnd}
              // className={`${showSideThunder ? "" : "hidden"} ${
              //   thunderAnimation3 ? "thunder-animation3" : ""
              // }`}
            />
            <div
              id="feature1"
              className="absolute  text-4xl text-black bg-white p-3 rounded-md w-[200px] text-center cursor-pointer hover:bg-purple-500 hover:text-white hover:shadow-md transition duration-300"
              style={{
                opacity: "0",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "5",
              }}
            >
              feature 1
            </div>
            <div
              id="feature2"
              className="absolute text-4xl text-black bg-white p-3 rounded-md w-[200px] text-center cursor-pointer hover:bg-purple-500 hover:text-white hover:shadow-md transition duration-300 "
              style={{
                opacity: "0",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "5",
              }}
            >
              feature 2
            </div>
            <div
              id="feature3"
              className="absolute text-4xl text-black bg-white p-3 rounded-md w-[200px] text-center cursor-pointer hover:bg-purple-500 hover:text-white hover:shadow-md transition duration-300"
              style={{
                opacity: "0",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "5",
              }}
            >
              feature 3
            </div>
            <div
              id="feature4"
              className="absolute text-4xl text-black bg-white p-3 rounded-md w-[200px] text-center cursor-pointer hover:bg-purple-500 hover:text-white hover:shadow-md transition duration-300"
              style={{
                opacity: "0",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "5",
              }}
            >
              feature 4
            </div>
          </div>
        </section>
        {/* <section className="section-12"></section> */}
      </div>
    </>
  );
};

export default Home;
