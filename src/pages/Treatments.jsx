import testimonials from "../data/testimonials.json";
import bokadirekt from "/bokadirekt.svg"

export const Treatments = () => {
  const testimonial = testimonials.filter(
    (testimonial) => testimonial.place === "Experience: Massage & Reiki"
  );

  console.log(testimonial);

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 max-w-[1400px] mx-auto mt-40 flex flex-col text-stone-900 gap-8 laptop:gap-10">
        <h3 className="font-dream text-3xl">Treatments</h3>
        <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-20">
          <div className=" flex flex-col gap-6">
            <h4 className="text-2xl italic font-dream ">
              A Gentle Space for Healing & Renewal
            </h4>
            <p className="text-justify ">
              My treatments are a blend of bodywork and energy healing, designed
              to support both physical and emotional well-being. Each session is
              shaped by the needs of the moment—whether that means releasing
              deep-seated tension, restoring balance, or simply creating space
              to slow down and reconnect. I rent a beautiful treatment room in
              Vasastan on tuesdays, and otherwise I&lsquo;m available at home,
              south of Stockholm.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col tablet:grid grid-cols-2 gap-1 tablet:gap-6 bg-warm-white p-4 rounded-xl items-start">
        
                <div className="flex gap-2">
                  <img
                    src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215900/pin-location-icon_mxwcfp.svg"
                    className="w-[10px]"
                  />
                  <p>Yogashala Zinkensdamm, Ringvägen 9d</p>
                </div>
                <p className="font-medium ml-4"> Mondays 08:00 - 13:00 <br/> Tuesdays 08:00 - 15:00 <br/> Wednesdays 08:00 - 12:00</p>
              </div>
              <div className="flex flex-col gap-6 bg-warm-white p-4 rounded-xl ">
              <div className="flex flex-col tablet:grid grid-cols-2 gap-1 tablet:gap-6 laptop:items-center">
                <div className="flex gap-2 ">
                  <img
                    src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215900/pin-location-icon_mxwcfp.svg"
                    className="w-[10px]"
                  />
                  <p>Home in Yoga, Birkagatan 23</p>
                </div>
                <p className="font-medium ml-4">Fridays 08:00 - 18:00</p>
              </div>
              <a href="https://www.bokadirekt.se/places/light-body-yoga-massage-132793" target="_blank" rel="noopener noreferrer" className="flex gap-2 font-medium items-center">Booking available at <img src={bokadirekt} alt="boka direkt" className="w-[100px]"/></a>
              </div>
              <div className="flex flex-col tablet:flex-row gap-1 tablet:gap-6 laptop:items-center bg-warm-white p-4 rounded-xl">
                <p className=" font-semibold laptop:w-[100px]">On demand</p>
                <div className="flex gap-2">
                  <img
                    src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744215900/pin-location-icon_mxwcfp.svg"
                    className="w-[10px]"
                  />
                  <p>Bjursätragatan 19, Rågsved</p>
                </div>
              </div>
            </div>
            <p className="text-justify ">
              There&lsquo;s no right or wrong way to experience these
              treatments—just an opportunity to pause, listen inward, and allow
              yourself to fully relax.
            </p>
            <h5 className="text-xl italic font-dream ">My treatments:</h5>
            <ul className="flex flex-col gap-6 ">
              <li className="bg-warm-white rounded-xl p-4 flex flex-col gap-4">
                <span className="font-semibold">Swedish massage</span>
                <div className="flex flex-col laptop:flex-row gap-4">
                  {" "}
                  Swedish massage uses gentle, flowing strokes to ease muscle
                  tension, improve circulation, and bring a deep sense of
                  relaxation. It&lsquo;s a grounding, nurturing practice that
                  helps the body unwind at its own pace.
                  <div className="flex laptop:flex-col gap-2 items-center laptop:self-end justify-between">
                    <div className="flex flex-col tablet:flex-row laptop:flex-col tablet:gap-8 laptop:gap-1">
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">60 min</span> 1000 sek
                      </p>
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">75 min</span> 1300 sek
                      </p>
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">90 min</span> 1500 sek
                      </p>
                    </div>
                    <a
                      href="mailto:therese@lightbodyyoga.se?subject=Bokning Svensk massage&body=Hej, jag skulle vilja boka en Svensk massage. Namn & telefonnummer:"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="laptop:inline-block laptop:w-full"
                    >
                      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px]">
                        <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightGray text-purple duration-300 group-hover:translate-x-0">
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
              </li>
              <li className="bg-warm-white rounded-xl p-4 flex flex-col gap-4">
                <span className="font-semibold">Reiki</span>
                <div className="flex flex-col laptop:flex-row gap-4">
                  Reiki is a quiet, meditative practice where hands are placed
                  lightly on or near the body, guiding energy to where
                  it&lsquo;s needed. It can bring a sense of clarity, balance,
                  and emotional release, often leaving a feeling of deep calm.
                  <div className="flex laptop:flex-col gap-2 items-center laptop:self-end justify-between">
                    <div className="flex flex-col tablet:flex-row laptop:flex-col tablet:gap-8 laptop:gap-1">
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">60 min</span> 1000 sek
                      </p>
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">75 min</span> 1200 sek
                      </p>
                    </div>
                    <a
                      href="mailto:therese@lightbodyyoga.se?subject=Bokning Reiki&body=Hej, jag skulle vilja boka en Reiki behandling. Namn & telefonnummer:"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="laptop:inline-block laptop:w-full"
                    >
                      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px]">
                        <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightGray text-purple duration-300 group-hover:translate-x-0">
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
              </li>
              <li className="bg-warm-white rounded-xl p-4 flex flex-col gap-4">
                <span className="font-semibold">Healing & Massage</span>
                <div className="flex flex-col laptop:flex-row gap-4">
                  Healing sessions draw from different techniques, combining
                  energy work, breath, and intuitive touch to create a session
                  that meets you where you are. Each treatment is unique,
                  offering a space to restore both body and mind.
                  <div className="flex laptop:flex-col gap-6 items-center laptop:self-end justify-between">
                    <div className="flex flex-col tablet:flex-row laptop:flex-col tablet:gap-8 laptop:gap-1">
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">60 min</span> 1200 sek
                      </p>
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">75 min</span> 1400 sek
                      </p>
                      <p className="whitespace-nowrap flex gap-2 laptop:gap-6">
                        <span className="font-semibold">90 min</span> 1600 sek
                      </p>
                    </div>
                    <a
                      href="mailto:therese@lightbodyyoga.se?subject=Bokning Healing session&body=Hej, jag skulle vilja boka en Healing & massage. Namn & telefonnummer:"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="laptop:inline-block laptop:w-full"
                    >
                      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px]">
                        <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightGray text-purple duration-300 group-hover:translate-x-0">
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
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744214433/pexels-koolshooters-Light-body-yoga_k2xinp.jpg"
            alt="Therese Lind Bjellder massage"
            className="w-full laptop:w-5/12 object-cover rounded-xl"
          />
        </div>
        <div className="laptop:w-3/4 laptop:mx-auto px-10 tablet:px-20 items-center pt-12 tablet:pt-15 pb-6 text-justify bg-warm-white rounded-4xl tablet:rounded-full tablet:rounded-br-none rounded-br-none shadow-lg  tablet:text-base cursor-pointer">
          <p className="italic text-xs tablet:text-sm">{testimonial[0].text}</p>
          <p className="mt-4 text-right text-xs">
            - {testimonial[0].name}, {testimonial.year}
          </p>
          <p className="text-right text-xs">{testimonial[0].place}</p>
        </div>
      </div>
    </section>
  );
};
