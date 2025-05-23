import { MdOutlineArrowOutward } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="flex justify-between h-fit p-2 laptop:px-6 relative font-body text-grayBlue">
      <div className="flex flex-col-reverse tablet:flex-row gap-2 tablet:gap-6">
      <p className="text-[10px] font-body laptop:hidden">© Light Body Yoga 2025</p>
     <a
              href="http://izabellind.com"
               target="_blank"
               rel="noopener noreferrer"
              className="relative flex gap-2 items-center text-[8px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-600 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            > <MdOutlineArrowOutward />
              Design & Frontend development 2025 | Izabel Lind
            </a>
            <a
              href="https://www.studiomamama.se/"
              target="_blank"
               rel="noopener noreferrer"
              className="relative flex gap-2 items-center text-[8px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-600 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            > <MdOutlineArrowOutward />
              Fotograf | Studio Mamama
            </a>
            </div>
    <p className="text-[8px] font-body hidden laptop:block">© Light Body Yoga 2025 | All Rights Reserved</p>
    
    </footer>
  )
}


