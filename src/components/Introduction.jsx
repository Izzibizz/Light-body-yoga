export const Introduction = () => {
  return (
    <section className="relative w-9/12 tablet:w-10/12 laptop:w-7/12 mx-auto py-28 tablet:py-20 laptop:py-32 flex flex-col text-stone-900">
      <div className=" flex flex-col tablet:flex-row tablet:justify-between gap-12 laptop:gap-0">
        <div className="flex flex-col gap-8 justify-end">
          <h3 className="font-dream text-3xl">Who am I?</h3>
          <p className="laptop:w-10/12 text-justify font-body">Phasellus lobortis lorem sit amet arcu consectetur consequat. Pellentesque blandit nunc ex, eu tristique tortor consequat et. Donec ultrices turpis quis ante mattis, ut maximus ligula aliquam. Phasellus finibus ornare ex, non aliquet lacus viverra eget. In tristique leo sed nisi tempor scelerisque. Donec at orci libero. Maecenas turpis felis, fermentum in condimentum at, interdum nec urna. Nam bibendum risus mi, nec faucibus felis tristique a. In interdum quam at sapien auctor euismod. Vestibulum tempor orci quis diam rhoncus gravida.</p>
         <button className="flex font-body items-center gap-2 border border-black rounded-2xl py-1 px-3 w-fit self-center tablet:self-start">Read more</button>
        </div>
        <img
          src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739369690/84348956b53a93f1c7e86ac4ad5e9192_lc0q6j.jpg"
          alt="Portrait Therese Lind Bjellder"
          className="self-end h-[450px] w-full laptop:h-[600px] laptop:w-[400px] rounded-lg laptop:rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};
