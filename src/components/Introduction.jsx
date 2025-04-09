import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Introduction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-10/12 laptop:w-8/12 mx-auto py-28 tablet:py-20 laptop:py-32 flex flex-col text-stone-900">
      <div className=" flex flex-col tablet:flex-row tablet:justify-between gap-20 laptop:gap-0">
        <div className="flex flex-col gap-8 justify-end">
          <div className="flex gap-4">
            {" "}
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739544817/birth_iohmnn.svg"
              alt="symbol birth"
              className="w-[40px]"
            />{" "}
            <h3 className="font-dream text-3xl">Who am I?</h3>
          </div>
          <p className="laptop:w-10/12 text-justify">
            <span className="text-xl">Hi I’m Therese!</span> My journey to yoga,
            and back to embodying my healer’s soul in this lifetime, has been a
            winding, rocky and beautiful road that’s carried me across the
            world—a path of movement, creativity, and deep healing, paved with
            self-discovery and growth.{" "}
          </p>
          <button
            className="flex items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit self-center tablet:self-start cursor-pointer hover:scale-105 hover:drop-shadow-2xl hover:bg-warm-white/60 hover:border-warm-white/60"
            onClick={() => navigate("/about")}
          >
            Read more
          </button>
        </div>
        <div className="flex flex-col justify-end text-end gap-2 h-[450px] w-full laptop:h-[600px] laptop:w-[900px] ">
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/t_w-600/v1744099430/StudioMamama-Light-body-yoga-Therese_jg7s3v.jpg"
            alt="Portrait Therese Lind Bjellder"
            className="w-full rounded-lg laptop:rounded-2xl object-cover"
          />
          <a
            href="https://www.studiomamama.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] flex items-center justify-end"
          >
            <MdOutlineArrowOutward />
            Photographer: Studio Mamama
          </a>
        </div>
      </div>
    </section>
  );
};
