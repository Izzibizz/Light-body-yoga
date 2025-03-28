import { NavLink } from "react-router-dom";

export const Overview = () => {
  return (
    <section className="bg-lightGray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-32 text-stone-900">
      <div className="gap-8 laptop:gap-10 flex flex-col">
        <h3 className="font-dream text-3xl text-center">What I offer</h3>
        <div className="grid grid-cols-2 laptop:grid-cols-6 gap-4 tablet:gap-10 laptop:gap-[2%] font-body font-extralight">
     
          <NavLink
            to="/schedule"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_500w/v1742483472/skissbild_Therese_Y8A8873-1-srgb_mjdudg.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Classes
            </div>
          </NavLink>
          <NavLink
            to="/treatments"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_500w/v1742483811/skissbild_Therese_Y8A9123-1-srgb_kfzs0x.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl "
              alt="image"
            />
            <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              <p>Treatments</p>
            </div>
          </NavLink>
          <NavLink
            to="/office-yoga"
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_w-500/v1742483820/skissbild_Therese_Y8A9467-1-srgb_ksvq1f.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white hover:drop-shadow-xl flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Yoga at work
            </div>
          </NavLink>
          <NavLink
            to="/private-session"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_500w/v1742493989/skissbild_Therese_Y8A8525-1-srgb_by8zvl.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Private sessions
            </div>
          </NavLink>
        
          <NavLink
            to="/retreats"
            className="hover:scale-105 hover:drop-shadow-xl hover:drop-shadow-xltransition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_500w/v1739461075/retreat_lah6u3.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Yoga Retreats
            </div>
          </NavLink>
          <NavLink
            to="/workshops"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_500w/v1742483813/skissbild_Therese_Y8A9009-1_srgb_xkwkym.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Workshops
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-dream text-2xl flex flex-col laptop:flex-row laptop:justify-between items-center gap-2">
            <h4>Holistic Yoga & Healing</h4>
            <div className="flex items-center gap-6">
              {" "}
              <h4>For Everyone, Anywhere</h4>
              <img
                src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739545182/free-movement_wbbd7u.svg"
                className="w-[40px]"
                alt="yoga position"
              />
            </div>
          </div>
          <div className="grid tablet:grid-cols-2 gap-[4%]">
            <p className="text-justify">
            I’m dedicated to help others tap into their inner strength through yoga, healing and social connections. Over time I have developed a broad spectra of practises to meet my yogis in different ways. I offer one on one treatments and private yoga classes, to connect with you personally as well as social gatherings like group classes, retreats and workshops. My everyday practice is based in Stockholm but I offer my experiences world-wide.
            
            </p>
            <p className="text-justify">
            I teach Hatha & Vinyasa Yoga, Yin Yoga, Yoga Nidra, Pranayama, and give Reiki and Intuitive Healing & Massage. With a heart full of light and love, I share dynamic, playful classes infused with themes and intentions to cultivate energy and mindfullness. My creativity flows into every session, reflecting my dancer's soul, guiding others toward authenticity and compassion—for themselves, towards others, and how we show up for our beautiful Mother Earth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
