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
        className={`absolute inset-0 w-full h-full object-cover z-0`}
      >
        <source
          src={isLaptop? "https://res.cloudinary.com/dbf8xygxz/video/upload/v1739448144/tlb-lby_dbkvpp.mp4" : "https://res.cloudinary.com/dbf8xygxz/video/upload/v1739449884/Tlb-lby-rotate_tms1pq.mp4"}
          type="video/mp4"
        />
      </video>
  )
}

