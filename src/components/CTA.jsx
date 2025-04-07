import { useEffect, useState } from "react"

export const CTA = () => {

const [ showCTA, setShowCTA ] = useState(false)

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
    {showCTA && (
    <a href="mailto:therese@lightbodyyoga.se"  className="animate-shortFadeIn fixed bottom-6 right-6 tablet:bottom-10 tablet:right-10 z-40 w-fit h-fit bg-purple/80 text-white rounded-xl p-2 px-4 tablet:text-lg text-center laptop:hover:scale-105">
        Connect with me
    </a>
  )}
  </>
  )
}

