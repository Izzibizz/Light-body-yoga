import { useNavigate } from "react-router-dom";

export const Introduction = () => {

  const navigate = useNavigate()

  return (
    <section className="relative w-10/12 laptop:w-8/12 mx-auto py-28 tablet:py-20 laptop:py-32 flex flex-col text-stone-900">
      <div className=" flex flex-col tablet:flex-row tablet:justify-between gap-12 laptop:gap-0">
        <div className="flex flex-col gap-8 justify-end">
         <div className="flex gap-4"> <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739544817/birth_iohmnn.svg" alt="symbol birth" className="w-[40px]"/> <h3 className="font-dream text-3xl">Who am I?</h3></div>
          <p className="laptop:w-10/12 text-justify font-body"><span className="text-xl">Hi I’m Therese!</span> My journey to yoga, and back to embodying my healer’s soul in this lifetime, has been a winding, rocky and beautiful road that’s carried me across the world—a path of movement, creativity, and deep healing, paved with self-discovery and growth. </p>
         <button className="flex font-body items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit self-center tablet:self-start cursor-pointer hover:scale-105 hover:drop-shadow-2xl hover:bg-warm-white/60 hover:border-warm-white/50" onClick={() => navigate("/about")}>Read more</button>
        </div>
        <img
          src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_w-500/v1742493988/skissbild_Therese_Y8A8157-1-srgb_avzwtb.jpg"
          alt="Portrait Therese Lind Bjellder"
          className="self-end h-[450px] w-full laptop:h-[600px] laptop:w-[400px] rounded-lg laptop:rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};
