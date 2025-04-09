import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useYogaStore } from "../store/useYogaStore";

export const CTA = () => {

const { showCTA, setShowCTA, isOpen } = useYogaStore()

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setShowCTA(true);
          } else {
            setShowCTA(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>
    {showCTA && !isOpen && (
    <NavLink to="/contact" className="animate-shortFadeIn fixed bottom-0 right-0 tablet:bottom-10 tablet:right-10 z-40 w-fit h-fit bg-purple/80 text-white rounded-tl-xl tablet:rounded-xl p-2 px-4 tablet:text-lg text-center laptop:hover:scale-105">
        Connect with me
    </NavLink>
  )}
  </>
  )
}

