import { MdArrowDropDownCircle } from "react-icons/md";

export const LandingPage = () => {
 

  return (
    <section className="animate-fadeIn ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`fixed inset-0 w-full h-full object-cover z-10`}
      >
        <source
          src="https://res.cloudinary.com/dbf8xygxz/video/upload/v1736869033/Sequence_01_13_e7e63a.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 z-20 w-full bg-light bg-opacity-10 py-4 flex justify-between items-center px-16">
      <div className="flex justify-between gap-32 font-body text-sm">
      <span className="ml-4">Schedule</span>
      <span className="ml-4">Workshops</span>
      <span className="ml-4">Office Yoga</span>
      </div>
      <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736872757/lby-logga-text_vgk1uh.svg"  alt="Therese Lind Bjellder Light Body Yoga" className="w-[100px]"/>
      <div className="flex justify-between gap-32 font-body">
      <span className="mr-4">Treatments</span>
      <span className="mr-4">About</span>
      <span className="mr-4">Contact</span>
      </div>
      </div>
      <div className="relative top-5 w-full flex z-40 flex flex-col">
        
      <div className="flex w-10/12 mx-auto mt-32 justify-end">
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736928855/530be1ab3b6184dd15e0e5a0b6012ac8-22_gebuz4.jpg" className=" w-[700px] rounded-xl"></img>
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736868251/svg_test_text_uohmza.svg" className="absolute w-[750px] left-1/4 top-1/3"/>
        <div className="flex font-body items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit ml-40 absolute left-[380px] top-[80%] ">Read more <MdArrowDropDownCircle /></div>
      </div>
      
      </div>
      </section>
  )
}

