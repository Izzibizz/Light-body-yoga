import { useNavigate } from "react-router-dom"

export const UpcomingSection = () => {

  const navigate = useNavigate()
  return (
    <section className="bg-lightGray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-32 text-stone-900">
      <div className="gap-8 laptop:gap-10 flex flex-col">
        <div className="flex gap-4 items-center">
          <h3 className="font-dream text-3xl text-center">Upcoming</h3>
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739545442/hands-up_qxepal.svg"
            alt="hands up symbol"
            className="w-[80px] h-[80px]"
          />
        </div>
        <div className="flex flex-col laptop:flex-row gap-10">
          <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
            <h4 className="font-dream text-xl">Workshop</h4>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold flex gap-4">
                05 May, 2025
                <span className="italic font-semibold">
                  Chitta Vritti Nirodah
                </span>
              </h5>
              <p>
                <span className="font-medium">Time:</span> 09:00 - 13:00
              </p>
              <p>
                <span className="font-medium">Place:</span>{" "}
                <a
                  href="https://holisticjourneycoach.com/lugnet-48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic"
                >
                  Lugnet48
                </a>
                , Lugnets allé 48F, Hammarby Sjöstad Stockholm
              </p>
              <p>
                {" "}
                <span className="font-medium">Creators and leaders:</span>{" "}
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
                onClick={() => navigate("/chitta-vritti-nirodah")}
              >
                <span>Read more</span>
              </button>
              <a
                href="mailto:therese@lightbodyyoga.se?subject=Bokning Chitta Vritti Nirodah&body=Hej, jag skulle vilja boka en plats på workshopen Chitta Vritti Nirodah."
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
          <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
            <h4 className="font-dream text-xl">Retreat</h4>
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
                <span className="font-medium">Creators and leaders:</span>{" "}
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
        </div>
      </div>
    </section>
  );
};
