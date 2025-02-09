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
      <div className="relative top-5 w-full flex z-40 flex flex-col">
        
      <div className="flex flex-col laptop:flex-row w-10/12 mx-auto mt-32 laptop:justify-end items-center gap-4">
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1736928855/530be1ab3b6184dd15e0e5a0b6012ac8-22_gebuz4.jpg" alt="Therese Lind Bjellder" className="w-full tablet:w-2/3 tablet:self-end laptop:w-1/2 rounded-xl"></img>
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739100255/svg_test-text_nmxvhb.svg" alt="text" className="tablet:absolute w-full tablet:w-1/2 laptop:w-[40%] [750px] tablet:left-10 tablet:top-2/3 laptop:left-[20%] laptop:top-1/3"/>
        <div className="flex font-body items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit tablet:self-end tablet:mr-20 laptop:mr-0 laptop:ml-40 laptop:absolute laptop:left-[20%] laptop:bottom-0 ">Read more <MdArrowDropDownCircle /></div>
      </div>
      
      </div>
      </section>
  )
}

