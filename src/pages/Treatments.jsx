export const Treatments = () => {
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40 flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">Treatments</h3>
        <div className="flex flex-col laptop:flex-row gap-10">
        <div className=" flex flex-col gap-6">
          <h4 className="text-2xl italic font-dream ">
          A Gentle Space for Healing & Renewal
          </h4>
          <p className="text-justify  laptop:w-3/4">
            My treatments are a blend of bodywork and energy healing, designed
            to support both physical and emotional well-being. Each session is
            shaped by the needs of the moment—whether that means releasing
            deep-seated tension, restoring balance, or simply creating space to
            slow down and reconnect.
          </p>
          <p className=" laptop:w-3/4">
            There&lsquo;s no right or wrong way to experience these treatments—just an
            opportunity to pause, listen inward, and allow yourself to fully
            relax.
          </p>
          <h5 className="text-xl italic font-dream ">
          My treatments:
          </h5>
          <ul className="flex flex-col gap-6  laptop:w-3/4">
            <li className="bg-warm-white rounded-xl p-4 flex flex-col gap-4">
            <span className="font-semibold">Swedish massage</span>
             <div className="flex flex-col laptop:flex-row gap-4"> Swedish massage uses gentle, flowing strokes to ease muscle
              tension, improve circulation, and bring a deep sense of
              relaxation. It&lsquo;s a grounding, nurturing practice that helps the
              body unwind at its own pace.
              <div className="flex laptop:flex-col gap-6 items-center laptop:self-end">
                <p className="whitespace-nowrap flex gap-6"><span className="font-semibold">1h</span> 1000 kr</p>
               <a 
                href="mailto:therese@lightbodyyoga.se?subject=Bokning Svensk massage&body=Hej, jag skulle vilja boka en Svensk massage -ditt datum-"
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
lightly on or near the body, guiding energy to where it&lsquo;s needed.
It can bring a sense of clarity, balance, and emotional release,
often leaving a feeling of deep calm.
      <div className="flex laptop:flex-col gap-6 items-center laptop:self-end">
        <p className="whitespace-nowrap flex gap-6"><span className="font-semibold">1h</span> 1100 kr</p>
        <a 
          href="mailto:therese@lightbodyyoga.se?subject=Bokning Reiki&body=Hej, jag skulle vilja boka en Reiki behandling -ditt datum-"
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
    <span className="font-semibold">Healing & massage</span>
    <div className="flex flex-col laptop:flex-row gap-4">
      Healing sessions draw from different techniques, combining
energy work, breath, and intuitive touch to create a session that
meets you where you are. Each treatment is unique, offering a
space to restore both body and mind.
      <div className="flex laptop:flex-col gap-6 items-center laptop:self-end">
        <p className="whitespace-nowrap flex gap-6"><span className="font-semibold">1h</span> 1200 kr</p>
        <a 
          href="mailto:therese@lightbodyyoga.se?subject=Bokning Healing session&body=Hej, jag skulle vilja boka en Healing session -ditt datum-"
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
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743578921/pexels-koolshooters-Light-body-yoga_urwden.jpg" alt="Therese Lind Bjellder massage" className="w-full laptop:w-1/3 rounded-xl"/>
        </div>
      </div>
    </section>
  );
};
