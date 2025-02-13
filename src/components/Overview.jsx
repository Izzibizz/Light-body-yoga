import { NavLink } from "react-router-dom"

export const Overview = () => {
  return (
    <section className="bg-gray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-40 gap-4 laptop:gap-10 flex flex-col text-stone-900">
      <div className="text-center flex flex-col gap-4 mb-10">
        <h3 className="font-dream text-3xl">Hello!</h3>
        <p className="laptop:w-1/2 text-justify mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat convallis urna, eget suscipit nisi pulvinar ut. Donec et vehicula nunc. Sed tincidunt et neque sit amet cursus. Quisque sodales rhoncus tellus. In ultricies euismod est, ac semper libero tristique sit amet.</p>
      </div>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 tablet:gap-10 laptop:gap-[4%] font-body font-extralight">
        
        <NavLink to="/office-yoga">
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/11062b_bf629a121acb42ac8c9f25e69fe0d79a_mv2_f8nnpc.webp"
            className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
            alt="image"
          />
          <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
            Yoga at work
        </div>
        </NavLink>
        <NavLink to="/schedule">
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/93e1df401815c159b7662c14d37f84b1_l2jnfx.jpg"
            className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
            alt="image"
          />
          <div className="bg-warm-white flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
            Schedule
          </div>
        </NavLink>
        <NavLink to="/private-session">
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/yoga_1_kexakz.jpg"
            className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl"
            alt="image"
          />
          <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
            Private session
          </div>
        </NavLink>
        <NavLink to="/treatments">
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/hands_h45m3c.jpg"
            className="aspect-square object-cover rounded-t-lg laptop:rounded-t-2xl "
            alt="image"
          />
          <div className="bg-warm-white h-1/3 flex-1 h-[50px] laptop:h-[70px] flex items-center justify-center laptop:text-lg">
            <p>Treatments</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
};
