import { useNavigate } from "react-router-dom"

export const Workshops = () => {

  const navigate = useNavigate()
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40  flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">Workshops</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
        <div className=" flex flex-col gap-8">
          <h4 className="text-2xl italic font-dream ">
            Join me for a special workshop together with other beautiful souls!
          </h4>
          <p className="text-justify">
            Most of my workshops I organize are co-created with other talented human
            beings, sound healers, meditation teachers and coaches to bring you
            unique yoga and wellness experiences. It&lsquo;s all about togetherness and sharing knowledge. Each workshop blends different
            styles, expertise, and perspectives, creating a rich and
            transformative space for learning, movement, and connection. Whether
            you&lsquo;re deepening your practice, exploring new techniques, or simply
            looking for inspiration and new connections these sessions are
            designed to support and uplift you.
          </p>
          <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
            <h4 className="font-dream text-xl">Upcoming</h4>
            <div className="flex flex-col gap-2">
            <h5 className="font-bold flex gap-4">31 May, 2025<span className="italic font-semibold">Chitta Vritti Nirodah</span></h5>
            <p><span className="font-medium">Time:</span> 09:00 - 13:00</p>
            <p><span className="font-medium">Place:</span> <a href="https://holisticjourneycoach.com/lugnet-48" target="_blank" rel="noopener noreferrer" className="italic">Lugnet48</a>, Lugnets allé 48F, Hammarby Sjöstad Stockholm</p>
            <p> <span className="font-medium">Creators and leaders:</span> Therese Lind Bjellder & <a href="https://www.instagram.com/sofiafrench/" target="_blank" rel="noopener noreferrer" className="italic">Sofia French</a></p>

            </div>
            <div className="flex gap-4">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px] hover:bg-lightPurple hover:text-white" onClick={() => navigate("/chitta-vritti-nirodah")}>
                  
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
        </div>
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743677006/dc-therese-lind-bjellder-workshop_alcpw3.png" className="laptop:w-1/2 aspect-[4/3] rounded-xl object-cover object-left"/>
      </div>
      </div>
    </section>
  );
};
