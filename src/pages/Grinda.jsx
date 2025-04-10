import { useState, useEffect } from "react";
import { Testimonials } from "../components/Testimonials"

export const Grinda = () => {

  const [showDiscount, setShowDiscount] = useState(true);

  useEffect(() => {
    const today = new Date();
    const expiryDate = new Date(today.getFullYear(), 4, 2); 

    if (today >= expiryDate) {
      setShowDiscount(false);
    }
  }, []);
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40  flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">3 days retreat in Grinda</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
          <div className=" flex flex-col gap-8">
            <h4 className="text-2xl italic font-dream ">
              Join Us for Yoga and mindfulness in the archipelago this summer
            </h4>
            {showDiscount &&
            <p className="text-justify font-medium text-warm-white">
              Early Bird Discount — available until 1 May
            </p>}
            <ul className=" gap-2 flex flex-col">
              What you get:
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                Yoga classes - Yin, Hatha, flow, Nidra, Pranayama
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                Meditation & Mindfulness
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                Reiki
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                Sauna & swim
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                Beautiful nature and peaceful surroundings
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                All vegetarian Meals & Housing at Grinda Wärdshus
              </li>
              <li className="flex gap-4 items-center">
                {" "}
                <img
                  src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                  className="h-[15px]"
                />
                All material for yoga & meditation, such as mats etc.
              </li>
            </ul>
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Prices</h4>
              {showDiscount ? (
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between">
                  Part in double room: <span className="font-medium">5950 sek{" "}
                  <span className="line-through text-xs font-light">6950 sek</span></span>
                </li>
                <li className="flex justify-between">
                  Single room: <span className="font-medium">6950 sek{" "}
                  <span className="line-through text-xs font-light">7950 sek</span></span>
                </li>
                <li className="flex justify-between">
                  Part in 2-beds cabin: <span className="font-medium">4950 sek{" "}
                  <span className="line-through text-xs font-light">5950 sek</span></span>
                </li>
                <p className="text-orange-500">1000 sek discount until 1 May</p>
              </ul>
              ) : (
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between">
                  Part in double room: <span className="font-medium">6950 sek</span>
                </li>
                <li className="flex justify-between">
                  Single room: <span className="font-medium">7950 sek</span>
                </li>
                <li className="flex justify-between">
                  Part in 2-beds cabin: <span className="font-medium">5950 sek</span>
                </li>
              </ul> )}
            </div>
           
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Details</h4>
              <div className="flex flex-col gap-2">
                <h5 className="font-bold flex gap-4 text-lg">22 - 24 Aug, 2025</h5>
                <p>
                  <span className="font-medium">Time: 3 days with hotel</span>
                </p>
                <p>
                  <span className="font-medium">Place:</span>{" "}
                  <a
                    href="https://grinda.se/mat-fest/wardshuset/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    Grinda Wärdshus
                  </a>
                  , Vaxholm
                </p>
                <p>
                  {" "}
                  <span className="font-medium">
                    Creators and leaders:
                  </span>{" "}
                  Therese Lind Bjellder &{" "}
                  <a
                    href="https://www.instagram.com/sofiafrench/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    Sofia French
                  </a>
                </p>
              </div>

              <a
                href="mailto:therese@lightbodyyoga.se?subject=Bokning Grinda&body=Hej, jag skulle vilja boka en plats på retreatet i Grinda
                ."
                target="_blank"
                rel="noopener noreferrer"
                className="laptop:inline-block laptop:w-full"
              >
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px]">
                  <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightPurple text-white duration-300 group-hover:translate-x-0">
                    Book via mail
                  </span>
                  <span className="hidden laptop:flex ease absolute h-full w-full transform items-center justify-center text-warm-white transition-all duration-300 group-hover:translate-x-full">
                    Book now
                  </span>
                  <span className="laptop:hidden">Book via mail</span>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 laptop:w-1/2">
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744214454/grinda-yoga-retreat-light-body-yoga-nature_u6aur8.png"
            alt="Grinda retreat 2024 - yoga Sofia French & Therese Lind Bjellder"
            className="rounded-xl object-cover laptop:hidden"
          />
           <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744214454/grinda-yoga-retreat-light-body-yoga-nature_u6aur8.png"
            alt="Grinda retreat 2024 - yoga Sofia French & Therese Lind Bjellder"
            className="rounded-xl object-cover hidden laptop:block"
          />
          <Testimonials testimonialsToDisplay="Grinda"/>
          </div>
        </div>
      </div>
    </section>
  );
};
