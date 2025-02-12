import { useRef, useEffect } from "react"
import { Overview } from "../components/Overview"
import { MdArrowDropDownCircle } from "react-icons/md";
import { useYogaStore } from "../store/useYogaStore";


export const LandingPage = () => {

  const imgRef = useRef(null)
  const { setHeaderBg } = useYogaStore()

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
          src="https://res.cloudinary.com/dbf8xygxz/video/upload/v1736869033/Sequence_01_13_e7e63a.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative w-full h-[100vh] flex z-10 flex flex-col gap-20">
        
      <div className="flex flex-col laptop:flex-row w-10/12 mx-auto mt-28 laptop:mt-32 laptop:justify-end items-center gap-4 " ref={imgRef}>
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736928855/530be1ab3b6184dd15e0e5a0b6012ac8-22_gebuz4.jpg" alt="Therese Lind Bjellder" className="w-full tablet:w-2/3 tablet:self-end laptop:w-1/2 rounded-xl mb-10"></img>
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739100255/svg_test-text_nmxvhb.svg" alt="text" className="tablet:absolute w-10/12 tablet:w-1/2 laptop:w-[40%] [750px] tablet:left-10 tablet:top-2/3 laptop:left-[8%] laptop:top-[28%]"/>
        <div className="flex font-body items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit tablet:self-end tablet:mr-20 laptop:mr-0 laptop:ml-40 laptop:absolute laptop:left-[20%] laptop:bottom-20 ">Read more <MdArrowDropDownCircle /></div>
      </div>
      
      </div>
      <Overview />
      </section>
  )
}

