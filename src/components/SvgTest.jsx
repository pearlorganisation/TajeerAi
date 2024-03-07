import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./SvgTest.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";

const SvgTest = () => {
  const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const [showSideThunder, setShowSideThunder] = useState(false);
  const [showCenterThunder, setShowCenterThunder] = useState(false);
  const [thunderAnimation1, setThunderAnimation1] = useState(false);
  const [thunderAnimation2, setThunderAnimation2] = useState(false);
  const [thunderAnimation3, setThunderAnimation3] = useState(false);
  const [bulbOn, setBulbOn] = useState(false);

  const [mounted, setMounted] = useState(false);
  const cloudRef = useRef(null);

  useLayoutEffect(() => {
    if (mounted) {
      cloudRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
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
      },
    });

    tl.to("#animated-element", {
      duration: 1,
      ease: "none",
      motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
      },
    });

    gsap.to("#animated-element", {
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
          setThunderAnimation2(false);
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
      duration: 2,
      opacity: 0,
      ease: "none",
    });

    tl2.to("#thunder1", {
      duration: 1,
      opacity: 1,
      ease: "none",
    });

    tl2.to("#thunder2", {
      duration: 2,
      scrub: true,
      top: "50%",
      transform: "translate(-50%. -50%)",
      height: "150px",
      ease: "none",
    });

    tl2.to("#thunder3", {
      duration: 1,
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
      },
    });

    tl3.to("#thunder2", {
      height: "50px",
      opacity: 0,
    });

    gsap.to("#licht", {
      scrollTrigger: {
        trigger: "#licht",
        start: "top center",
        end: "center center",
        // scrub: true,
        markers: true,
      },
      opacity: 1
    })
    //bulb animation
  });

  return (
    <>
      <div id="track">
        <nav className="h-32"></nav>
        <section className="section-1">
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
        </section>
        <section className="section-2 bg-gray-100"></section>
        <section className="section-3  bg-blue-100"></section>
        <section className="section-4 bg-emerald-200">
          <div className="text-9xl font-semibold z-[9999] absolute w-full pl-[100px] pt-[10px]">
            Tajer AI
          </div>
        </section>
        <section className="section-5 bg-green-100"></section>
        <section className="section-6 bg-emerald-200" ></section>
        <section className="section-7"></section>
        <section className="section-8"></section>
        <section className="section-9 realtive">
          <div
            id="bulb-container"
            className="h-48 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3"
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
                viewBox="0 0 300 300" // Adjust viewBox to maintain aspect ratio
                enableBackground="new 0 0 196 196"
                xmlSpace="preserve"
              >
                <g id="bulb">
                  <path
                    id="bulb_body"
                    fill={`${bulbOn ? '#FFFF00': '#FFFFFF'}`}
                    stroke="#3D3D3D"
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
                <g id="licht" style={{opacity:'0'}}>
                  <line
                    fill="none"
                    stroke="#96BF1F"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="151.088"
                    y1="90.5"
                    x2="170"
                    y2="90.5"
                  />
                  <line
                    fill="none"
                    stroke="#96BF1F"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="25"
                    y1="90.5"
                    x2="43.912"
                    y2="90.5"
                  />

                  <line
                    fill="none"
                    stroke="#96BF1F"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="135.392"
                    y1="128.327"
                    x2="148.765"
                    y2="141.677"
                  />

                  <line
                    fill="none"
                    stroke="#96BF1F"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="46.234"
                    y1="39.322"
                    x2="59.607"
                    y2="52.673"
                  />

                  <line
                    fill="none"
                    stroke="#96BF1F"
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
                    stroke="#96BF1F"
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
                    stroke="#96BF1F"
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
                    stroke="#96BF1F"
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

export default SvgTest;
