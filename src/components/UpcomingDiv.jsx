export const UpcomingDiv = () => {
  return (
    <section className="bg-lightGray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-32 text-stone-900">
      <div className="gap-8 laptop:gap-10 flex flex-col">
        <div className="flex gap-4 items-center">
          <h3 className="font-dream text-3xl text-center">Upcoming</h3>
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739545442/hands-up_qxepal.svg"
            alt="hands up symbol"
            className="w-[80px] h-[80px]"
          />
        </div>
        <div className="grid grid-cols-2 laptop:grid-cols-6 gap-4 tablet:gap-10 laptop:gap-[2%] font-body font-extralight"></div>
      </div>
    </section>
  );
};
