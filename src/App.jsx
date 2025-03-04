import React, { useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import flower from "./assets/flower.png";
import CenterText from "./Components/CenterText";
import Paragraph from "./Components/Paragraph";
import Bottom from "./Components/Bottom";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgref = useRef(null);
  const txtref = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom 1%",
        scrub: 1,
      },
    });

    // Image Animation
    tl.to(imgref.current, {
      y: "-20%", // translateY(-20%)
      duration: 1,
    }).to(imgref.current, {
      scale: 0.4, // Scale animation properly
      duration: 1,
    });
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#FFB0A3] to-[#FF8676] text-white">
      <Navbar />
      <div id="main" className="relative pb-[15vw] pt-[15vw] px-[8vw]">
        <CenterText ref={txtref} />
        <Paragraph />
        <Bottom />
        <img
          ref={imgref}
          src={flower}
          alt="Flower"
          className="left-[6.5%] fixed top-0 h-[86vw]"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
