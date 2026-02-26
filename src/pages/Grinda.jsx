import { useState, useEffect } from "react";
import { Testimonials } from "../components/Testimonials";
import { SwiperComp } from "../components/SwiperComp";
import upcomingRetreats from "../data/upcomingRetreats.json";
import { ImageModalSlider } from "../components/ImageModalSlider";
import { useIsLaptop } from "../hooks/IsLaptop";

export const Grinda = () => {
  const project = upcomingRetreats.find(
    (retreat) => retreat.id === "grinda-retreat",
  );

  const [showDiscount, setShowDiscount] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isLaptop = useIsLaptop();

  useEffect(() => {
    const today = new Date();
    const expiryDate = project.lastEarlyBirdPrice;

    if (today >= expiryDate) {
      setShowDiscount(false);
    }
  }, [project]);

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 max-w-[1400px] mx-auto mt-40  flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">{project.title2}</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
          <div className=" flex flex-col gap-8">
            <h4 className="text-2xl italic font-dream ">{project.subtitle}</h4>
            {showDiscount && (
              <p className="text-justify font-medium text-warm-white text-xl">
                Early Bird Discount — available until April 1st
              </p>
            )}
            <ul className="gap-2 flex flex-col">
              What you get:
              {project.includes.map((item, index) => (
                <li key={index} className="flex gap-4 items-center">
                  <img
                    src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744216443/circle-bullet_rbd7a8.svg"
                    className="h-[15px]"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Prices</h4>

              {showDiscount ? (
                <ul className="flex flex-col gap-2">
                  {project.prices.discount.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      {item.label}:{" "}
                      <span className="font-medium">
                        {item.price}{" "}
                        <span className="line-through text-xs font-light">
                          {item.originalPrice}
                        </span>
                      </span>
                    </li>
                  ))}

                  <p className="text-orange-500">
                    1000 sek discount until April 1st
                  </p>
                </ul>
              ) : (
                <ul className="flex flex-col gap-2">
                  {project.prices.regular.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      {item.label}:{" "}
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Details</h4>
              <div className="flex flex-col gap-2">
                <h5 className="font-bold flex gap-4 text-lg">
                  {project.details.date}
                </h5>

                <p>
                  <span className="font-medium">
                    Time: {project.details.time}
                  </span>
                </p>

                <p>
                  <span className="font-medium">Place:</span>{" "}
                  <a
                    href={project.details.placeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    {project.details.place}
                  </a>
                  , {project.details.location}
                </p>

                <p>
                  <span className="font-medium">Creators and leaders:</span>{" "}
                  {project.leaders.map((leader, i) => (
                    <span key={i}>
                      {leader.url ? (
                        <a
                          href={leader.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic"
                        >
                          {leader.name}
                        </a>
                      ) : (
                        leader.name
                      )}
                      {i < project.leaders.length - 1 && " & "}
                    </span>
                  ))}
                </p>
              </div>

              <a
                href="mailto:therese@lightbodyyoga.se?subject=Bokning Grinda&body=Hej, jag skulle vilja boka en plats på retreatet i Grinda
                ."
                target="_blank"
                rel="noopener noreferrer"
                className="laptop:inline-block laptop:w-full"
              >
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[250px]">
                  <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightPurple text-white duration-300 group-hover:translate-x-0">
                    Ask me via mail
                  </span>
                  <span className="hidden laptop:flex ease absolute h-full w-full transform items-center justify-center text-warm-white transition-all duration-300 group-hover:translate-x-full">
                    Questions about next retreat?
                  </span>
                  <span className="laptop:hidden">Book via mail</span>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 laptop:w-1/2">
            <img
              src={
                isLaptop
                  ? project.images[selectedIndex].url
                  : project.images[selectedIndex].thumbnail
              }
              alt={project.images[selectedIndex].alt}
              className="rounded-xl object-cover cursor-pointer h-[300px] laptop:h-[500px]"
              onClick={() => setIsModalOpen(true)}
            />

            <SwiperComp
              images={project.images}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />

            <Testimonials testimonialsToDisplay="Grinda" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModalSlider
          images={project.images}
          startIndex={selectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};
