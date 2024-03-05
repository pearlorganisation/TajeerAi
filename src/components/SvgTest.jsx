import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./SvgTest.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import smoothscroll from 'smoothscroll-polyfill';



const SvgTest = () => {
  
  // Initialize the polyfill
  smoothscroll.polyfill();

  const [showSideThunder, setShowSideThunder] = useState(false)
  const [showCenterThunder, setShowCenterThunder] = useState(false)
  const [thunderAnimation1, setThunderAnimation1] = useState(false)
  const [thunderAnimation2, setThunderAnimation2] = useState(false)
  const [thunderAnimation3, setThunderAnimation3] = useState(false)

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
          gsap.set("#animated-element", { position: "", top: "", left: "", transform: "", opacity: "1" });
        },

        onEnterBack: () => {
          // Remove the fixed positioning and centering styles
          gsap.set("#animated-element", { position: "", top: "", left: "", transform: "" });
        },
        onLeave:() => {
          gsap.set("#animated-element", { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" });
        }
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

    
    gsap.to('#animated-element',{
      scrollTrigger: {
        trigger: ".section-5",
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setShowSideThunder(true)
          setShowCenterThunder(true)
          setThunderAnimation1(true)
          setThunderAnimation2(true)
          setThunderAnimation3(true)
        },
        onEnterBack: () => {
          setShowSideThunder(true)
          setShowCenterThunder(true)
          setThunderAnimation1(true)
          setThunderAnimation2(true)
          setThunderAnimation3(true)
        },
        onLeave: () => {
          setShowSideThunder(false)
          // setShowCenterThunder(false)
          setThunderAnimation1(false)
          // setThunderAnimation2(false)
          setThunderAnimation3(false)
        },
        onLeaveBack: () => {
          setShowSideThunder(false)
          // setShowCenterThunder(false)
          setThunderAnimation1(false)
          setThunderAnimation2(false)
          setThunderAnimation3(false)
        }
        
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
            setThunderAnimation1(false)
            setThunderAnimation3(false)
            gsap.set("#thunder2", { position: "", top: "", left: "", transform: "", opacity: ""});
        },
        onEnterBack: () => {
          gsap.set("#thunder2", { position: "", top: "", left: "", transform: "", opacity: ""});
        },
        onLeave: () => {
          setShowCenterThunder(true)
          console.log("center thunder" + showCenterThunder)
          setThunderAnimation2(false)
          gsap.set("#thunder2", { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: "1",});
        }
      }
    }) 
    
    tl2.to('#cloud', {
      duration:3,
      opacity: 0,
      ease: "none"
    })

    tl2.to('#thunder1', {
      duration:1,
      opacity: 1,
      ease: "none"
    })

    tl2.to('#thunder3', {
      duration:1,
      opacity: 0,
      ease: "none"
    })

    tl2.to(['#thunder2'], {
      top:"50%",
      transform: "translate(-50%. -50%)",
      ease: "none"
    })
    



  });



  return (
    <>
      <div id="track">
        <nav className="h-32"></nav>
        <section className="section-1">
          <div id="animated-element" className="">
            <img src="src/assets/Cloud.png" alt="Cloud" id="cloud" ref={cloudRef}/>
            <img src="src/assets/thunder1.png" id="thunder1" className={`${showSideThunder ? '' : 'hidden'} ${thunderAnimation1 ? 'thunder-animation' : ''}`} />
            <img src="src/assets/thunder2.png" id="thunder2" className={`${showCenterThunder ? '' : 'hidden'} ${thunderAnimation2 ? 'thunder-animation' : ''}`} />
            <img src="src/assets/thunder3.png" id="thunder3" className={`${showSideThunder ? '' : 'hidden'} ${thunderAnimation3 ? 'thunder-animation' : ''}`} />
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
        <section className="section-2"></section>
        <section className="section-3"></section>
        <section className="section-4"></section>
        <section className="section-5"></section>
        <section className="section-6"></section>
        <section className="section-7"></section>
        <section className="section-8"></section>
        <section className="section-9"></section>
        <section className="section-10"></section>
        <section className="section-11"></section>
        <section className="section-12"></section>
      </div>
    </>
  );
};

export default SvgTest;