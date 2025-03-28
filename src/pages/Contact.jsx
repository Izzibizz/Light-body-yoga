import { PiInstagramLogoFill } from "react-icons/pi";

export const Contact = () => {
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative relative w-10/12 laptop:w-9/12 mx-auto mt-40 laptop:mt-48 flex flex-col gap-10 text-stone-900">
        <div className="flex gap-4 items-center">
          <h3 className="font-dream text-3xl">Contact</h3>{" "}
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743172936/hand-yoga-contact_k17acc.svg"
            className="w-[70px] h-[40px]"
          />
        </div>
        <div className="flex flex-col tablet:flex-row gap-2 laptop:gap-10">
          <div className=" flex flex-col-reverse tablet:flex-col bg-warm-white p-6 laptop:p-8 rounded-xl w-full desktop:w-1/2 gap-10 laptop:gap-20">
            <div className="flex flex-col gap-4 text-lg"><h4 className="text-2xl italic font-dream ">Let’s Connect!</h4>
            <p className=" font-body text-justify">
              Whether you’re looking for a private yoga session, a deeply
              restorative treatment, or a customized workshop, I’d love to hear
              from you. If your workplace could benefit from office yoga, or if
              you have an idea for a collaboration, let’s explore it together!
            </p>
            <p>
              Feel free to reach out with any questions, booking requests, or
              creative ideas—I'm always open to new possibilities.
            </p>
            <p className="text-xl italic">I look forward to connecting with you!</p>
            </div>
            <div className="flex gap-4 laptop:gap-10 flex-wrap">
              <a
                href="mailto:therese@lightbodyyoga.se"
                className="flex gap-2 tablet:gap-4 items-center"
              >
                <img
                  src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743172962/orange_mail_m06yz1.svg"
                  className="w-[20px] h-[20px] laptop:w-[30px] laptop:h-[30px]"
                />
                <p className="font-dream text-xl laptop:text-2xl">Therese@lightbodyyoga.se</p>
              </a>
              <a href="" className="flex gap-2 tablet:gap-4 font-dream text-xl laptop:text-2xl">
                <PiInstagramLogoFill className="text-orange-500 w-[20px] h-[20px] laptop:w-[30px] laptop:h-[30px]" />{" "}
                Instagram: yogitherese
              </a>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_w-500/v1742483825/skissbild_Therese_Y8A9479-1-srgb_qxl6gc.jpg"
            className="tablet:w-[200px] laptop:w-[450px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
