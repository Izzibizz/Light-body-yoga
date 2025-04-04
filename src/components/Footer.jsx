import { MdOutlineArrowOutward } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="flex justify-between h-fit p-2 laptop:px-6 relative font-body text-grayBlue">
      <div className="flex flex-col-reverse tablet:flex-row gap-2 tablet:gap-6">
     <a
              href="http://izabellind.com"
              className="relative flex gap-2 items-center text-[8px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-warm-white after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            > <MdOutlineArrowOutward />
              Design & Frontend development 2025 | Izabel Lind
            </a>
            <a
              href="https://www.studiomamama.se/"
              className="relative flex gap-2 items-center text-[8px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-warm-white after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            > <MdOutlineArrowOutward />
              Fotograf | Studio Mamama
            </a>
            </div>
    <p className="text-[8px] font-body hidden laptop:block">© Light Body Yoga 2025 | All Rights Reserved</p>
    <p className="text-[8px] font-body laptop:hidden self-end">© Light Body Yoga 2025</p>
    </footer>
  )
}


