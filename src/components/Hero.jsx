import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { SlArrowDown } from "react-icons/sl";
import sun from "/sol.svg";
import { useYogaStore } from "../store/useYogaStore";

export const Hero = ({scrollToOverview}) => {

    const { setHeaderBg } = useYogaStore();
    
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

const imgRef = useRef()

  return (
    <div className="relative w-full min-h-[100vh]  z-10 flex flex-col py-32 tablet:py-40">
    <div
      className="flex flex-col laptop:flex-row-reverse w-10/12 mx-auto laptop:justify-between items-center gap-8 tablet:gap-20 h-full"
      ref={imgRef}
    >
      <img
        src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736928855/530be1ab3b6184dd15e0e5a0b6012ac8-22_gebuz4.jpg"
        alt="Therese Lind Bjellder"
        className="w-full max-w-[400px] laptop:max-w-[650px] tablet:self-center laptop:self-end laptop:w-1/2 rounded-xl mb-2"
      ></img>
      <div className="w-full laptop:w-[40%] flex flex-col tablet:flex-row laptop:flex-col gap-4">
      <img
        src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739100255/svg_test-text_nmxvhb.svg"
        alt="text"
        className="w-10/12 tablet:w-2/3 laptop:w-11/12 mx-auto tablet:mx-0"/>
        <button className="flex font-body items-center gap-3 cursor-pointer group self-center tablet:self-end" onClick={scrollToOverview}>
        Read more{" "}
        <div className="relative w-[60px] h-[60px] laptop:w-[70px] laptop:h-[70px]">
          <img src={sun} alt="sun button more" className="group-hover:scale-115 transition-transform duration-100" />
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
     

  </div>
  )
}

