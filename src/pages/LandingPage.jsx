import { useRef } from "react";
import { Overview } from "../components/Overview";
import { Introduction } from "../components/Introduction";
import { Upcoming } from "../components/Upcoming";

import { Hero } from "../components/Hero";


export const LandingPage = () => {

  const overviewRef = useRef(null)



  const scrollToOverview = () => {
    if (overviewRef.current) {
      const yOffset = -50;
      const y = overviewRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }


  

  return (
    <section className="animate-mediumFadeIn ">
      <Hero scrollToOverview={scrollToOverview}/>
      <div ref={overviewRef}>
        <Overview />
      </div>
      <Introduction />
      <Upcoming />
    </section>
  );
};
