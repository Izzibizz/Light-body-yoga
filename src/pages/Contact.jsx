

import { MdOutlineArrowOutward } from "react-icons/md";

export const Contact = () => {
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative relative w-10/12 laptop:w-9/12 mx-auto mt-40 flex flex-col gap-10 text-stone-900">
        <div className="flex gap-4 items-center">
          <h3 className="font-dream text-3xl">Contact</h3>{" "}
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216589/hand-yoga-contact_ufga68.svg"
            alt="hand symbol"
            className="w-[70px] h-[40px]"
          />
        </div>
        <div className="flex flex-col laptop:flex-row gap-2">
          <div className=" flex flex-col-reverse tablet:flex-col bg-warm-white p-6 laptop:p-8 rounded-xl w-full desktop:w-1/2 laptop:mx-auto laptop:h-fit laptop:self-end laptop:mb-6 gap-10">
            <div className="flex flex-col gap-4 text-lg text-justify">
              <h4 className="text-2xl italic font-dream ">
                Let&lsquo;s Connect!
              </h4>
              <p>
                Whether you&lsquo;re looking for a private yoga session, a
                deeply restorative treatment, or a customized workshop,
                I&lsquo;d love to hear from you. If your workplace could benefit
                from office yoga, or if you have an idea for a collaboration,
                let&lsquo;s explore it together!
              </p>
              <p>
                Feel free to reach out with any questions, booking requests, or
                creative ideas — I&lsquo;m always open to new possibilities.
              </p>
              <p className="text-xl italic">
                I look forward to connecting with you!
              </p>
            </div>
            <div className="flex gap-4 laptop:gap-10 flex-col laptop:flex-row flex-wrap laptop:items-center">
              <a
                href="mailto:therese@lightbodyyoga.se"
                className="flex gap-2 tablet:gap-4 items-center"
              >
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215884/orange_mail_ytv4jk.svg"
                  className="w-[20px] h-[20px] laptop:w-[30px] laptop:h-[30px]"
                  alt="mail contact"
                />
                <p className="font-dream text-xl laptop:text-2xl">
                  Therese@lightbodyyoga.se
                </p>
              </a>
              <a
                href="https://www.instagram.com/yogitherese/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 tablet:
              
              
              gap-2 tablet:gap-4 font-dream text-xl laptop:text-2xl"
              >
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744264754/instagram_qn9y6a.svg"
                  className="text-orange-500 w-[20px] h-[20px] laptop:w-[30px] laptop:h-[30px]"
                  alt="instagram"
                />
                yogitherese
              </a>
      
            </div>
          </div>
          <div className="flex flex-col gap-2">
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744214393/StudioMamama_Therese-lind-bjellder-Light-body.yoga-contact_fftupj.png"
            className=" laptop:w-[450px] object-cover rounded-xl"
            alt="portrait Therese"
          />
 <a href="https://www.studiomamama.se/" target="_blank" rel="noopener noreferrer" className="text-[10px] flex items-center self-end justify-end h-4"><MdOutlineArrowOutward />Photographer: Studio Mamama</a>
 </div>
        </div>
       
         
      </div>
    </section>
  );
};
