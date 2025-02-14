import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react";
import { useYogaStore } from "../store/useYogaStore";

export const Header = () => {
  const { headerBg } = useYogaStore();
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const navLinksBase = [
    { name: "Schedule", path: "/schedule" },
    { name: "Workshops", path: "/workshops" },
    { name: "Office Yoga", path: "/office-yoga" },
    { name: "Treatments", path: "/treatments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinks = isMobile
  ? [{ name: "Home", path: "/" }, ...navLinksBase]
  : navLinksBase; 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 w-full py-4 flex px-4 laptop:px-10 h-[100px] laptop:h-fit justify-end laptop:justify-start font-body ${
        headerBg ? "bg-lightPurple/90 " : "bg-light/0"
      }`}
    >
      {/* Mobile Menu */}
      <div className="flex w-full laptop:hidden justify-end">
        <img
          src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736872757/lby-logga-text_vgk1uh.svg"
          alt="Therese Lind Bjellder Light Body Yoga"
          className="h-[60px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="flex flex-col justify-center items-center z-50 cursor-pointer justify-self-end"
        >
          <span
            className={`bg-stone-900 block transition-all duration-300 ease-out 
              h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-sm ${
                isOpen
                  ? "rotate-45 translate-y-1 laptop:translate-y-1.2 bg-warm-white"
                  : "-translate-y-0.5 laptop:-translate-y-0.7 bg-stone-900"
              }`}
          >
            {" "}
          </span>
          <span
            className={` bg-stone-900 block transition-all duration-300 ease-out 
              h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-sm my-0.5 laptop:my-0.7 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-stone-900  block transition-all duration-300 ease-out 
              h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-xl ${
                isOpen
                  ? "-rotate-45 -translate-y-1 laptop:-translate-y-1.2 bg-warm-white"
                  : "translate-y-0.5 laptop:translate-y-0.7 bg-stone-900"
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ clipPath: "circle(5% at 100% 0%)" }} 
        animate={{ clipPath: "circle(150% at 50% 50%)" }} 
        exit={{ clipPath: "circle(5% at 100% 0%)" }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-screen w-screen overflow-hidden font-dream text-4xl text-warm-white bg-grayBlue/95 flex justify-end px-8 "
          ref={dropdownRef}
        >
          <ul className="flex flex-col laptop:flex-row items-end gap-8 font-light absolute bottom-10 animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink layout="position"
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="hover:scale-110 hover:text-dark-brown transform transition-transform duration-300"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Laptop Menu */}
      <div className="hidden laptop:flex justify-between w-full items-center text-lg font-extralight text-stone-900 py-3 px-4">
        <div className="flex justify-between w-1/3">
          {navLinks.slice(0, 3).map((link) => (
            <NavLink key={link.path} to={link.path} className="hover:scale-110 hover:text-warm-white transition-all duration-100 hover:drop-shadow-xl">
              {link.name}
            </NavLink>
          ))}
        </div>

        <img
          src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736872757/lby-logga-text_vgk1uh.svg"
          alt="Therese Lind Bjellder Light Body Yoga"
          className="w-[100px] cursor-pointer hover:scale-110 transition-transform duration-100 hover:drop-shadow-xl absolute top-3 left-1/2 -translate-x-1/2"
          onClick={() => navigate("/")}
        />

        <div className="flex justify-between w-1/3">
          {navLinks.slice(3).map((link) => (
            <NavLink key={link.path} to={link.path} className="hover:scale-110 hover:text-warm-white transition-all duration-100 hover:drop-shadow-xl">
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};
