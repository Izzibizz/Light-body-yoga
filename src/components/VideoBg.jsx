import { useEffect, useState }from "react"

export const VideoBg = () => {

    const [ isLaptop, setIsLaptop ] = useState(false)
  
    useEffect(() => {
      const handleResize = () => {
        setIsLaptop(window.innerWidth >= 1024);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
     <video
        autoPlay
        loop
        muted="true"
        playsInline="true"
        className={`hide-controls absolute inset-0 w-full h-full object-cover z-0`}
      >
        <source
          src={isLaptop? "https://res.cloudinary.com/dknoal1v0/video/upload/v1744218894/tlb-lby_kg0vin.mp4" : "https://res.cloudinary.com/dknoal1v0/video/upload/v1744218919/Tlb-lby-rotate_rayypc.mp4"}
          type="video/mp4"
        />
      </video>
  )
}

