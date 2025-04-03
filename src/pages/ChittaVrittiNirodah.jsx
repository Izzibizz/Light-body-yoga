
export const ChittaVrittiNirodah = () => {
    return (
        <section className="animate-mediumFadeIn ">
        <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40  flex flex-col text-stone-900">
          <h3 className="font-dream text-3xl mb-10">
          Chitta Vritti Nirodah</h3>
          <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
          <div className=" flex flex-col gap-8">
            <h4 className="text-2xl italic font-dream ">
              Join me for a special workshop together with other beautiful souls!
            </h4>
            <p className="text-justify">
            Här ska det stå detaljerat vad workshopen innehåller, sen tex pauser, mat osv också!
            </p>
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Details</h4>
              <div className="flex flex-col gap-2">
              <h5 className="font-bold flex gap-4">05 May, 2025</h5>
              <p><span className="font-medium">Time:</span> 09:00 - 13:00</p>
              <p><span className="font-medium">Place:</span> <a href="https://holisticjourneycoach.com/lugnet-48" target="_blank" rel="noopener noreferrer" className="italic">Lugnet48</a>, Lugnets allé 48F, Hammarby Sjöstad Stockholm</p>
              <p> <span className="font-medium">Creators and leaders:</span> Therese Lind Bjellder & <a href="https://www.instagram.com/sofiafrench/" target="_blank" rel="noopener noreferrer" className="italic">Sofia French</a></p>
              <p>PRISER</p>
              </div>
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
          <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743677006/dc-therese-lind-bjellder-workshop_alcpw3.png" className="laptop:w-1/2 rounded-xl object-cover"/>
        </div>
        </div>
      </section>
    )
  }
  