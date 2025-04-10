export const ChittaVrittiNirodah = () => {
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40  flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">Chitta Vritti Nirodah</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
          <div className=" flex flex-col gap-4">
            <h4 className="text-2xl italic font-dream ">
              A Journey to Inner Stillness - Join us for a 4-hour immersive
              workshop at Lugnet48
            </h4>
            <p className="text-justify">
              Inspired by the wisdom of the Yoga Sutras, Chitta Vritti Nirodah
              means: “Yoga is the stilling of the fluctuations of the mind.” In
              this workshop, we invite you to slow down, reconnect, and restore
              balance through movement, stillness, and energy work.
            </p>
            <p>
              <span className="font-medium">What to expect:</span> Slow dynamic
              asana – A mindful flow to release tension, awaken energy, and
              create harmony. Meditation – Guided practice to cultivate
              stillness and clarity. Yin yoga – Deep, grounding postures for
              surrender and release. Reiki & healing touch – Gentle energy work
              to restore natural balance. Silent tea & fruit break – A mindful
              moment of nourishment.{" "}
            </p>
            <p className="hidden laptop:flex">
              Set in the calm and nurturing space of Lugnet48, this experience
              is designed to help you soften, let go, and tune into your inner
              self.
            </p>
            <div className="flex flex-col bg-warm-white p-4 rounded-xl gap-4">
              <h4 className="font-dream text-xl">Details</h4>
              <div className="flex flex-col gap-2">
                <h5 className="font-bold flex gap-4">31 May, 2025</h5>
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
                <p>
                  <span className="font-medium">Price:</span> 750 sek
                </p>
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
            <p className="laptop:hidden">
              Set in the calm and nurturing space of Lugnet48, this experience
              is designed to help you soften, let go, and tune into your inner
              self.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/t_w-700/v1744215852/lugnet48-lugnets-alle-yogastudio_nyt6jj.jpg"
            className="laptop:w-1/3 rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
