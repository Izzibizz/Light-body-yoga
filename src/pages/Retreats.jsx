import { useNavigate } from "react-router-dom";

export const Retreats = () => {
  const navigate = useNavigate();

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 max-w-[1400px] mx-auto mt-40 flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">Yoga Retreats</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
          <div className=" flex flex-col gap-4">
            <h4 className="text-2xl italic font-dream ">
              Mindfulness meets the beauty of nature and community
            </h4>
            <p className="text-justify">
              Imagine a little getaway where you can simply be — where every day
              can be a new adventure filled with joy, connection, and
              self-discovery. Our multi-day yoga retreats are set in stunning,
              serene locations that invite you to unwind, take a break from the
              must dos of everyday life, and seek togetherness in the simplest
              moments. We go swimming in the sun, enjoy the sauna, share
              delicious meals and practice yoga, meditation, breathwork, and
              movement both indoors and outdoors, in a playful, welcoming
              atmosphere.{" "}
            </p>
            <p className="hidden laptop:block text-justify">
              Whether you choose a private room just for you or prefer to share
              the experience with friends or new kindred spirits, these retreats
              are all about embracing every level and celebrating the journey
              rather than perfection.
            </p>
            <p className="hidden laptop:block text-justify">
              It&lsquo;s a relaxed, joyous gathering where the focus is on fun,
              friendship, and the simple pleasure of being together. Join us and
              rediscover the delight of living fully, laughing often, and moving
              with your heart in a space where you&lsquo;e always welcome.
            </p>
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Upcoming</h4>
              <div className="flex flex-col gap-2">
                <h5 className="font-bold flex gap-4">
                  22 - 24 Aug, 2025
                  <span className="italic font-semibold">
                    Yoga & Mindfullness in the Archipelago
                  </span>
                </h5>
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
              <div className="flex gap-4">
                <button
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px] hover:bg-lightPurple hover:text-white"
                  onClick={() => navigate("/grinda")}
                >
                  <span>Read more</span>
                </button>
                <a
                  href="mailto:therese@lightbodyyoga.se?subject=Bokning Grinda Retreat&body=Hej, jag skulle vilja boka en plats på Grinda Retreat."
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
          </div>
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744214454/grinda-yoga-retreat-light-body-yoga-nature_u6aur8.png"
            alt="Grinda retreat 2024"
            className="laptop:w-1/2 rounded-xl object-cover"
          />
          <p className="laptop:hidden text-justify">
            Whether you choose a private room just for you or prefer to share
            the experience with friends or new kindred spirits, these retreats
            are all about embracing every level and celebrating the journey
            rather than perfection.
          </p>
          <p className="laptop:hidden text-justify">
            It&lsquo;s a relaxed, joyous gathering where the focus is on fun,
            friendship, and the simple pleasure of being together. Join us and
            rediscover the delight of living fully, laughing often, and moving
            with your heart in a space where you&lsquo;e always welcome.
          </p>
        </div>
      </div>
    </section>
  );
};
