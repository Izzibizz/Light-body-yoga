import { NavLink } from "react-router-dom";

export const Overview = () => {
  return (
    <section className="bg-lightGray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-32 text-stone-900">
      <div className="gap-8 laptop:gap-10 flex flex-col">
        <h3 className="font-dream text-3xl text-center">What I offer</h3>
        <div className="grid grid-cols-2 laptop:grid-cols-6 gap-4 tablet:gap-10 laptop:gap-[2%] font-body font-extralight">
          <NavLink
            to="/office-yoga"
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/11062b_bf629a121acb42ac8c9f25e69fe0d79a_mv2_f8nnpc.webp"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white hover:drop-shadow-xl flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Yoga at work
            </div>
          </NavLink>
          <NavLink
            to="/schedule"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/93e1df401815c159b7662c14d37f84b1_l2jnfx.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Classes
            </div>
          </NavLink>
          <NavLink
            to="/private-session"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/yoga_1_kexakz.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
              alt="image"
            />
            <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              Private sessions
            </div>
          </NavLink>
          <NavLink
            to="/treatments"
            className="hover:scale-105 hover:drop-shadow-xl transition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/hands_h45m3c.jpg"
              className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl "
              alt="image"
            />
            <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
              <p>Treatments</p>
            </div>
          </NavLink>
          <NavLink
            to="/retreats"
            className="hover:scale-105 hover:drop-shadow-xl hover:drop-shadow-xltransition-transform duration-200"
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739461075/retreat_lah6u3.jpg"
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
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739461075/workshop_y7e11j.jpg"
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
              <h4>Anytime, Anywhere</h4>
              <img
                src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739545182/free-movement_wbbd7u.svg"
                className="w-[40px]"
                alt="yoga position"
              />
            </div>
          </div>
          <div className="grid tablet:grid-cols-2 gap-[4%]">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              feugiat convallis urna, eget suscipit nisi pulvinar ut. Donec et
              vehicula nunc. Sed tincidunt et neque sit amet cursus. Quisque
              sodales rhoncus tellus. In ultricies euismod est, ac semper libero
              tristique sit amet.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              feugiat convallis urna, eget suscipit nisi pulvinar ut. Donec et
              vehicula nunc. Sed tincidunt et neque sit amet cursus. Quisque
              sodales rhoncus tellus. In ultricies euismod est, ac semper libero
              tristique sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
