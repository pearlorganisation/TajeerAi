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
  const [showSideThunder, setShowSideThunder] = useState(false);
  const [showCenterThunder, setShowCenterThunder] = useState(false);
  const [thunderAnimation1, setThunderAnimation1] = useState(false);
  const [thunderAnimation2, setThunderAnimation2] = useState(false);
  const [thunderAnimation3, setThunderAnimation3] = useState(false);
  const [bulbOn, setBulbOn] = useState(false);

  const [shouldScroll, setShouldScroll] = useState(false);

  const [mounted, setMounted] = useState(false);
  const cloudRef = useRef(null);



  // useLayoutEffect(() => {
  //   if (mounted) {
  //     cloudRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [mounted]);

  useLayoutEffect(() => {
    if (mounted && shouldScroll) {
      // Add a condition to check if scrolling is required
      cloudRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mounted, shouldScroll]); // Include shouldScroll in the dependency array

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    
    // gsap code here

    // timeline 1
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#path1",
        start: "top top",
        end: "bottom center",
        // end: '+=' + ((window.innerHeight * 3) + 50),
        scrub: true,
        // markers: true,
        // onEnter: () => {
        //   setAbsolute(true)
        // },
        // onEnterBack: () => {
        //   setAbsolute(true)
        // },

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
            opacity: "0"
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
          // setThunderAnimation2(false)
          setThunderAnimation3(false);
        },
        onLeaveBack: () => {
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
          setThunderAnimation1(false);
          setThunderAnimation3(false);
          gsap.set("#thunder2", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "",
          });
        },
        onEnterBack: () => {
          gsap.set("#thunder2", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "",
          });
        },
        onLeave: () => {
          setShowCenterThunder(true);
          // setThunderAnimation2(false);
          gsap.set("#thunder2", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: "1",
          });
        },
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
      top: "50%",
      transform: "translate(-50%. -50%)",
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
          setThunderAnimation2(false);
          setShowCenterThunder(false);
          gsap.set("#bulb-container", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          });
        },
        onEnterBack: () => {
          setBulbOn(false);
          setThunderAnimation2(true);
          setShowCenterThunder(true);
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
        end: "bottom center",
        scrub: true,
        // markers: true,
    }
   })
  });

  return (
    <>
      {/* navbar */}
      <nav className="py-4 px-8 shadow flex justify-between z-[9999]">
        <div className="text-2xl font-bold">Tajer</div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <Link to="/signin">
              <span className="text-white font-semibold shadow-md bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded hover:underline transition duration-300">
                Sign-In
              </span>
            </Link>
            <Link to="/signup">
              <span className="text-black font-semibold shadow-md bg-emerald-400 hover:bg-emerald-500  py-1 px-3 rounded hover:underline transition duration-300">
                Sign-Up
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div id="track">
        <section className="section-1">
          {/* animated elements */}
          <div id="animated-element" className="">
            <img
              src="src/assets/Cloud.png"
              alt="Cloud"
              id="cloud"
              ref={cloudRef}
            />
            <img
              src="src/assets/thunder1.png"
              id="thunder1"
              className={`${showSideThunder ? "" : "hidden"} ${
                thunderAnimation1 ? "thunder-animation1" : ""
              }`}
            />
            <img
              src="src/assets/thunder2.png"
              id="thunder2"
              className={`${showCenterThunder ? "" : "hidden"} ${
                thunderAnimation2 ? "thunder-animation2" : ""
              }`}
            />
            <img
              src="src/assets/thunder3.png"
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
          <div
            className="text-4xl md:text-9xl font-semibold w-full relative"
            style={{ zIndex: "99999" }}
          >
            Tajer AI
          </div>
        </section>
        <section className="section-3  bg-blue-100"></section>
        <section className="section-4 bg-emerald-200"></section>
        <section className="section-5 bg-green-100"></section>
        <section className="section-6 bg-emerald-200"></section>
        <section className="section-7"></section>
        <section className="section-8"></section>
        <section className="section-9 realtive">
          <div
            id="bulb-container"
            className="w-fit absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/3"
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
        <section className="section-11"></section>
        <section className="section-12"></section>
      </div>
    </>
  );
};

export default Home;
