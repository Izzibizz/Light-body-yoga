import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Header = () => {

  const dropdownRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 z-20 w-full bg-light/10 py-4 flex px-4 laptop:px-16 ">
      <div className="flex w-full justify-between laptop:hidden">
      <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736872757/lby-logga-text_vgk1uh.svg"  alt="Therese Lind Bjellder Light Body Yoga" className="w-[100px] justify-self-center cursor-pointer"/>
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
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute laptop:top-4 laptop:right-12 top-0 z-40 right-0 w-full h-screen laptop:w-fit laptop:h-fit text-xl text-warm-white bg-dark-blue/90 laptop:bg-warm-white/0 flex justify-center `}
        >
          <ul className="flex flex-col laptop:flex-row items-center align-middle laptop:items-end gap-6 laptop:gap-10 laptop:pb-4 laptop:px-6 font-light mt-48 laptop:mt-0">
            <li
            /*   onClick={() => handleNavClick("galleri")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              Schedule
            </li>
            <li
             /*  onClick={() => handleNavClick("omEllen")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              Workshops
            </li>
            <li
             /*  onClick={() => handleNavClick("cv")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              Office yoga
            </li>
            <li
             /*  onClick={() => handleNavClick("cv")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              Treatments
            </li>
            <li
             /*  onClick={() => handleNavClick("cv")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              About
            </li>
            <li
             /*  onClick={() => handleNavClick("contact")} */
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >
              Contakt
            </li>
          </ul>
        </div>
      )}
      <div className="hidden laptop:flex justify-between w-full items-center">
      <div className="flex justify-between gap-32 text-sm">
      <span className="ml-4">Schedule</span>
      <span className="ml-4">Workshops</span>
      <span className="ml-4">Office Yoga</span>
      </div>
      <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736872757/lby-logga-text_vgk1uh.svg"  alt="Therese Lind Bjellder Light Body Yoga" className="w-[100px] cursor-pointer"/>
      <div className="flex justify-between gap-32 text-sm">
      <span className="mr-4">Treatments</span>
      <span className="mr-4">About</span>
      <span className="mr-4">Contact</span>
      </div>
      </div>
    </header>
  )
}
