import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Overview } from "../components/Overview";
import { Introduction } from "../components/Introduction";
import { SlArrowDown } from "react-icons/sl";
import { useYogaStore } from "../store/useYogaStore";
import sun from "/sol.svg";

export const LandingPage = () => {
  const imgRef = useRef(null);
  const overviewRef = useRef(null)
  const { setHeaderBg } = useYogaStore();
  const [isLaptop, setIsLaptop] = useState(false);


  const scrollToOverview = () => {
    if (overviewRef.current) {
      const yOffset = -50;
      const y = overviewRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const imgTop = imgRef.current.offsetTop;
      const scrollPosition = window.scrollY;

      setHeaderBg(scrollPosition > imgTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHeaderBg(false); // Reset to false when mounting

    return () => {
      setHeaderBg(true); // Ensure true when unmounting (navigating away)
    };
  }, [setHeaderBg]);

  return (
    <section className="animate-fadeIn ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0`}
      >
        <source
          src={isLaptop? "https://res.cloudinary.com/dbf8xygxz/video/upload/v1739448144/tlb-lby_dbkvpp.mp4" : "https://res.cloudinary.com/dbf8xygxz/video/upload/v1739448864/tlb-lby-mobile_mmmgsf.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="relative w-full h-[100vh] flex z-10 flex flex-col gap-20">
        <div
          className="flex flex-col laptop:flex-row w-10/12 mx-auto mt-28 laptop:mt-32 laptop:justify-end items-center gap-4 "
          ref={imgRef}
        >
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736928855/530be1ab3b6184dd15e0e5a0b6012ac8-22_gebuz4.jpg"
            alt="Therese Lind Bjellder"
            className="w-full tablet:w-2/3 tablet:self-end laptop:w-1/2 rounded-xl mb-2"
          ></img>
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739100255/svg_test-text_nmxvhb.svg"
            alt="text"
            className="tablet:absolute w-9/12 tablet:w-2/3 laptop:w-[40%] [750px] tablet:left-20 tablet:top-1/2 laptop:left-[8%] laptop:top-[28%]"
          />
          <button className="flex font-body items-center gap-2 tablet:self-end tablet:mr-32 tablet:mt-40 laptop:mr-0 laptop:ml-40 laptop:absolute laptop:left-[20%] laptop:bottom-20 cursor-pointer hover:scale-110 transition-transform duration-100" onClick={scrollToOverview}>
            Read more{" "}
            <div className="relative w-[60px] h-[60px] laptop:w-[70px] laptop:h-[70px]">
              <img src={sun} alt="sun button more" className="" />
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <SlArrowDown   className="text-[13px] laptop:text-[15px]" />
              </motion.div>
            </div>
          </button>
        </div>
      </div>
      <div ref={overviewRef}>
        <Overview />
      </div>
      <Introduction />
    </section>
  );
};
