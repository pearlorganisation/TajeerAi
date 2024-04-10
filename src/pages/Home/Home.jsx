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
        markers: true,
        onEnter: () => {
          // section5ref.current.style.backgroundColor = "#747d89";
          setShowSideThunder(true);
          setShowCenterThunder(true);
          setThunderAnimation1(true);
          setThunderAnimation2(true);
          setThunderAnimation3(true);
          gsap.set('#thunder1', {
            opacity: 1,
            ease: "none",
          })
        },
        onEnterBack: () => {
          console.log('on enter back')
          setShowSideThunder(false);
          setShowCenterThunder(false);
          setThunderAnimation1(false);
          setThunderAnimation2(false);
          setThunderAnimation3(false);
        },
        // onLeave: () => {
        //   setShowSideThunder(false);
        //   // setShowCenterThunder(false)
        //   setThunderAnimation1(false);
        //   // setThunderAnimation2(false);
        //   setThunderAnimation3(false);
        // },
        // onLeaveBack: () => {
        //   // section5ref.current.style.backgroundColor = "#d1fae5";
        //   setShowSideThunder(false);
        //   setShowCenterThunder(false);
        //   setThunderAnimation1(false);
        //   setThunderAnimation2(false);
        //   setThunderAnimation3(false);
        // },
      },
    });

    // vanishing cloud and side thunders timeline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        start: "center top",
        end: "bottom center",
        scrub: true,
        markers: true,  

        onEnter: () => {
          setShowBulb(true);
          // console.log('enter')
          gsap.set("#thunder2", {
            position: "",
            top: "",
            left: "",
            transform: "",
            opacity: "",
          });
        },
        onEnterBack: () => {
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
          setShowSideThunder(false);
          setThunderAnimation1(false);
          setThunderAnimation3(false);
          setThunderAnimation2(false);
          setThunderAnimation2Shake(true);
          gsap.set("#thunder2", {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: "1",
          });
        },
        onLeaveBack: () => {
          setShowSideThunder(true);
          setThunderAnimation1(true);
          setThunderAnimation3(true);
          setThunderAnimation2(true);
          setThunderAnimation2Shake(false);
        }
      },
    });

    tl2.to("#cloud", {
      // duration: 1,
      opacity: 0,
      ease: "none",
    });



    tl2.to("#thunder2", {
      // duration: 1,
      scrub: true,
      // top: "50%",
      transform: "translate(-50%. -50%)",
      height: "150px",
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
          // section9ref.current.style.backgroundColor = "#fb9e44d1";
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
          // section9ref.current.style.backgroundColor = "#3a3d42";
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
        <section className="section-2 relative text-white text-center">
          <div className="custom-shape-divider-top">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* <div className={`card w-[600px] h-[350px] flex flex-col justify-evenly  text-center absolute top-1/2 left-1/2 z-[99] -translate-x-1/2 -translate-y-1/2  transition duration-300`}>
            <p className="text-6xl font-semibold">Hey there!</p>
            <p className="text-6xl font-semibold py-[10px] inline-block text-transparent bg-clip-text gradient-text">
              Welcome to Tajer AI!
            </p>
          </div> */}
          <div
            className={` w-[600px] h-[350px] flex flex-col justify-evenly  text-center absolute top-1/2 left-1/2 z-[99] -translate-x-1/2 -translate-y-1/2  transition duration-300`}
          >
            <p className="text-6xl font-semibold py-[10px]">
              Welcome to Tajer AI! :)
            </p>
          </div>
        </section>
        <section className="section-3 text-center text-white">
          <div className="custom-shape-divider-top2 ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>

        <section className="section-4 relative"></section>

        <section className="section-5 h-auto relative">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 406L13.7 408.5C27.3 411 54.7 416 82 416.3C109.3 416.7 136.7 412.3 163.8 409C191 405.7 218 403.3 245.2 402C272.3 400.7 299.7 400.3 327 401.3C354.3 402.3 381.7 404.7 409 407.5C436.3 410.3 463.7 413.7 491 415.5C518.3 417.3 545.7 417.7 573 420.3C600.3 423 627.7 428 654.8 419.7C682 411.3 709 389.7 736.2 389C763.3 388.3 790.7 408.7 818 417.2C845.3 425.7 872.7 422.3 886.3 420.7L900 419L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
              fill="#0066ff"
            ></path>
            <path
              d="M0 468L13.7 468.3C27.3 468.7 54.7 469.3 82 463.7C109.3 458 136.7 446 163.8 442C191 438 218 442 245.2 448.3C272.3 454.7 299.7 463.3 327 460C354.3 456.7 381.7 441.3 409 434.5C436.3 427.7 463.7 429.3 491 428.7C518.3 428 545.7 425 573 424.3C600.3 423.7 627.7 425.3 654.8 434C682 442.7 709 458.3 736.2 459.3C763.3 460.3 790.7 446.7 818 441.5C845.3 436.3 872.7 439.7 886.3 441.3L900 443L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
              fill="#6c68ff"
            ></path>
            <path
              d="M0 511L13.7 507C27.3 503 54.7 495 82 492C109.3 489 136.7 491 163.8 488C191 485 218 477 245.2 478.2C272.3 479.3 299.7 489.7 327 491.5C354.3 493.3 381.7 486.7 409 488.8C436.3 491 463.7 502 491 506.5C518.3 511 545.7 509 573 509.5C600.3 510 627.7 513 654.8 509.7C682 506.3 709 496.7 736.2 492.3C763.3 488 790.7 489 818 493.7C845.3 498.3 872.7 506.7 886.3 510.8L900 515L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
              fill="#9b6aff"
            ></path>
            <path
              d="M0 549L13.7 546C27.3 543 54.7 537 82 537.7C109.3 538.3 136.7 545.7 163.8 549.5C191 553.3 218 553.7 245.2 552.3C272.3 551 299.7 548 327 543.8C354.3 539.7 381.7 534.3 409 531.2C436.3 528 463.7 527 491 532.2C518.3 537.3 545.7 548.7 573 547.5C600.3 546.3 627.7 532.7 654.8 529C682 525.3 709 531.7 736.2 537.2C763.3 542.7 790.7 547.3 818 545.7C845.3 544 872.7 536 886.3 532L900 528L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
              fill="#c06cff"
            ></path>
          </svg>
        </section>
        <section className="section-6 z-0 h-auto">
          <svg
            id="visual"
            viewBox="0 0 540 960"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 78L15 87.5C30 97 60 116 90 117.5C120 119 150 103 180 87C210 71 240 55 270 59.8C300 64.7 330 90.3 360 103.2C390 116 420 116 450 98.5C480 81 510 46 525 28.5L540 11L540 0L525 0C510 0 480 0 450 0C420 0 390 0 360 0C330 0 300 0 270 0C240 0 210 0 180 0C150 0 120 0 90 0C60 0 30 0 15 0L0 0Z"
              fill="#c06cff"
            ></path>
            <path
              d="M0 155L15 151.7C30 148.3 60 141.7 90 132C120 122.3 150 109.7 180 101.7C210 93.7 240 90.3 270 104.7C300 119 330 151 360 157.5C390 164 420 145 450 125.8C480 106.7 510 87.3 525 77.7L540 68L540 9L525 26.5C510 44 480 79 450 96.5C420 114 390 114 360 101.2C330 88.3 300 62.7 270 57.8C240 53 210 69 180 85C150 101 120 117 90 115.5C60 114 30 95 15 85.5L0 76Z"
              fill="#b563f3"
            ></path>
            <path
              d="M0 222L15 214C30 206 60 190 90 169.2C120 148.3 150 122.7 180 113C210 103.3 240 109.7 270 127.3C300 145 330 174 360 175.7C390 177.3 420 151.7 450 146.8C480 142 510 158 525 166L540 174L540 66L525 75.7C510 85.3 480 104.7 450 123.8C420 143 390 162 360 155.5C330 149 300 117 270 102.7C240 88.3 210 91.7 180 99.7C150 107.7 120 120.3 90 130C60 139.7 30 146.3 15 149.7L0 153Z"
              fill="#ab5ae7"
            ></path>
            <path
              d="M0 299L15 295.7C30 292.3 60 285.7 90 263.2C120 240.7 150 202.3 180 176.8C210 151.3 240 138.7 270 145.2C300 151.7 330 177.3 360 182.2C390 187 420 171 450 171C480 171 510 187 525 195L540 203L540 172L525 164C510 156 480 140 450 144.8C420 149.7 390 175.3 360 173.7C330 172 300 143 270 125.3C240 107.7 210 101.3 180 111C150 120.7 120 146.3 90 167.2C60 188 30 204 15 212L0 220Z"
              fill="#a051dc"
            ></path>
            <path
              d="M0 327L15 330.3C30 333.7 60 340.3 90 321.2C120 302 150 257 180 233C210 209 240 206 270 204.5C300 203 330 203 360 198.2C390 193.3 420 183.7 450 191.7C480 199.7 510 225.3 525 238.2L540 251L540 201L525 193C510 185 480 169 450 169C420 169 390 185 360 180.2C330 175.3 300 149.7 270 143.2C240 136.7 210 149.3 180 174.8C150 200.3 120 238.7 90 261.2C60 283.7 30 290.3 15 293.7L0 297Z"
              fill="#9648d0"
            ></path>
            <path
              d="M0 519L15 507.8C30 496.7 60 474.3 90 445.7C120 417 150 382 180 354.8C210 327.7 240 308.3 270 292.3C300 276.3 330 263.7 360 284.5C390 305.3 420 359.7 450 375.7C480 391.7 510 369.3 525 358.2L540 347L540 249L525 236.2C510 223.3 480 197.7 450 189.7C420 181.7 390 191.3 360 196.2C330 201 300 201 270 202.5C240 204 210 207 180 231C150 255 120 300 90 319.2C60 338.3 30 331.7 15 328.3L0 325Z"
              fill="#8b3fc5"
            ></path>
            <path
              d="M0 548L15 540C30 532 60 516 90 482.5C120 449 150 398 180 372.5C210 347 240 347 270 340.5C300 334 330 321 360 346.5C390 372 420 436 450 460C480 484 510 468 525 460L540 452L540 345L525 356.2C510 367.3 480 389.7 450 373.7C420 357.7 390 303.3 360 282.5C330 261.7 300 274.3 270 290.3C240 306.3 210 325.7 180 352.8C150 380 120 415 90 443.7C60 472.3 30 494.7 15 505.8L0 517Z"
              fill="#8137b9"
            ></path>
            <path
              d="M0 836L15 799.2C30 762.3 60 688.7 90 629.5C120 570.3 150 525.7 180 514.5C210 503.3 240 525.7 270 541.7C300 557.7 330 567.3 360 597.8C390 628.3 420 679.7 450 714.8C480 750 510 769 525 778.5L540 788L540 450L525 458C510 466 480 482 450 458C420 434 390 370 360 344.5C330 319 300 332 270 338.5C240 345 210 345 180 370.5C150 396 120 447 90 480.5C60 514 30 530 15 538L0 546Z"
              fill="#762eae"
            ></path>
            <path
              d="M0 846L15 807.5C30 769 60 692 90 632.8C120 573.7 150 532.3 180 529.2C210 526 240 561 270 585C300 609 330 622 360 647.7C390 673.3 420 711.7 450 737.2C480 762.7 510 775.3 525 781.7L540 788L540 786L525 776.5C510 767 480 748 450 712.8C420 677.7 390 626.3 360 595.8C330 565.3 300 555.7 270 539.7C240 523.7 210 501.3 180 512.5C150 523.7 120 568.3 90 627.5C60 686.7 30 760.3 15 797.2L0 834Z"
              fill="#6c25a3"
            ></path>
            <path
              d="M0 875L15 873.3C30 871.7 60 868.3 90 873C120 877.7 150 890.3 180 892C210 893.7 240 884.3 270 879.7C300 875 330 875 360 867C390 859 420 843 450 849.3C480 855.7 510 884.3 525 898.7L540 913L540 786L525 779.7C510 773.3 480 760.7 450 735.2C420 709.7 390 671.3 360 645.7C330 620 300 607 270 583C240 559 210 524 180 527.2C150 530.3 120 571.7 90 630.8C60 690 30 767 15 805.5L0 844Z"
              fill="#621b98"
            ></path>
            <path
              d="M0 942L15 935.5C30 929 60 916 90 909.5C120 903 150 903 180 906.3C210 909.7 240 916.3 270 914.8C300 913.3 330 903.7 360 902C390 900.3 420 906.7 450 916.2C480 925.7 510 938.3 525 944.7L540 951L540 911L525 896.7C510 882.3 480 853.7 450 847.3C420 841 390 857 360 865C330 873 300 873 270 877.7C240 882.3 210 891.7 180 890C150 888.3 120 875.7 90 871C60 866.3 30 869.7 15 871.3L0 873Z"
              fill="#58118d"
            ></path>
            <path
              d="M0 961L15 961C30 961 60 961 90 961C120 961 150 961 180 961C210 961 240 961 270 961C300 961 330 961 360 961C390 961 420 961 450 961C480 961 510 961 525 961L540 961L540 949L525 942.7C510 936.3 480 923.7 450 914.2C420 904.7 390 898.3 360 900C330 901.7 300 911.3 270 912.8C240 914.3 210 907.7 180 904.3C150 901 120 901 90 907.5C60 914 30 927 15 933.5L0 940Z"
              fill="#4e0582"
            ></path>
          </svg>
        </section>

        {/* <section className="section-7"></section> */}
        {/* <section
          className="section-8 transition duration-300"
          ref={section8ref}
        ></section> */}
        <section
          className="section-9 realtive transition duration-300 "
          // ref={section9ref}
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
