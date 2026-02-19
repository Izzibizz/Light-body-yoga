import { motion } from "framer-motion"
import PropTypes from "prop-types";

import { SlArrowDown } from "react-icons/sl";



export const Hero = ({scrollToOverview}) => {


  return (
    <div className="relative w-full min-h-[100vh] z-10 flex flex-col py-28 tablet:py-32 tablet:py-40 laptop:pt-32">
    <div
      className="flex flex-col laptop:flex-row-reverse w-10/12 mx-auto laptop:justify-between items-center gap-6 tablet:gap-12 laptop:gap-20 h-full"
      
    >
      <img
        src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744214408/StudioMamama-Emma-vistrand-Therese-Lind-Bjellder-yoga_wquwoz.png"
        alt="Therese Lind Bjellder"
        className="h-[300px] w-full tablet:h-full laptop:w-[40vw] laptop:h-[80vh] aspect-square object-cover tablet:self-end rounded-xl mb-2"
      />
      <div className="w-full justify-center laptop:w-[45%] flex flex-col tablet:flex-row laptop:flex-col gap-4">
      <img
        src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215591/healing_treatments_holistic-yoga-therese-lind-bjellder_h98z84.svg"
        alt="Healing treatment & holistic yoga"
        className="w-9/12 tablet:w-2/3 laptop:w-11/12  mx-auto laptop:mx-0"/>
        <button className="flex font-extralight italic items-center gap-3 cursor-pointer group self-center tablet:self-end " onClick={scrollToOverview}>
        <p className="w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:w-[80px] group-hover:opacity-100">Read more{" "}</p>
        <div className="relative w-[60px] h-[60px] laptop:w-[70px] laptop:h-[70px]">
          <img src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215582/sol_b47ljp.svg" alt="sun button more" className="group-hover:scale-115 transition-transform duration-100 group-hover:animate-spin" />
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

Hero.propTypes = {
  scrollToOverview: PropTypes.boolean
};

