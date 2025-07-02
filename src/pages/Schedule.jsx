import schedule from "../data/schedule.json";
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";

export const Schedule = () => {
  console.log(schedule);

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-11/12 desktop:max-w-[1400px] mx-auto mt-40 flex flex-col gap-10 text-stone-900">
        <div className="flex gap-4 items-center laptop:items-start">
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744265293/classes-light-body-yoga-icon_oxuhkj_dnjljq.svg"
            className="h-[40px]"
          />
          <h3 className="font-dream text-3xl">Schedule</h3>
        </div>
        <div className="bg-purple/40 border border-solid rounded-3xl p-6 py-8 laptop:grid laptop:grid-cols-6 w-full laptop:w-full gap-4 laptop:mx-auto ">
          {schedule.map((dayItem, index) => {
            const { day, classes } = dayItem;

            return (
              <div key={index} className="flex flex-col gap-1">
                <h5 className="text-xl tablet:text-base laptop:text-lg laptop:font-semibold text-stone-800 mb-2">
                  {day}
                </h5>
                <div className="flex flex-col tablet:flex-row laptop:flex-col gap-4">
                  {classes && classes.length > 0 ? (
                    classes.map((yogaClass, classIndex) => (
                      <div
                        key={classIndex}
                        className={`bg-warm-white/90 w-full tablet:w-[150px] laptop:w-full laptop:min-h-[160px] p-4 border border-gray-300 rounded-xl shadow-md mb-4 flex flex-col justify-between gap-2 laptop:gap-1`}
                      >
                        <div className="flex justify-between items-center">
                          <h6 className="text-lg tablet:text-sm font-semibold tracking-wider font-dream">
                            {yogaClass.class}
                          </h6>
                        </div>

                        <p className="text-sm  tablet:text-xs flex justify-between gap-2">
                          <span className="flex gap-1 items-center ">
                            {yogaClass.startingAt} <MdArrowRightAlt />
                            {yogaClass.endingAt}
                          </span>
                          {yogaClass.duration && (
                            <span className="p-1 border border-dotted rounded-xl tablet:hidden desktop:block text-center">
                              {yogaClass.duration}
                            </span>
                          )}
                        </p>
                        {yogaClass.duration && (
                          <p className="p-1 border border-dotted rounded-xl hidden tablet:block desktop:hidden w-fit text-xs">
                            {yogaClass.duration}
                          </p>
                        )}
                        <p className="text-sm tablet:text-xs text-stone-700 font-medium">
                          {yogaClass.place}
                        </p>

                        <a
                          href={yogaClass.bookinglink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full"
                        >
                          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-4 px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer w-full">
                            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-lightGray text-purple duration-300 group-hover:translate-x-0">
                              {yogaClass.place === "Yogashala Nytorget"
                                ? "Yogashala"
                                : yogaClass.place === "Downtown Camper"
                                ? "Downtown C."
                                : yogaClass.class ===
                                  "Treatments - Reiki & Massage" || yogaClass.place === "Stockholm"
                                ? "email me"
                                : yogaClass.place === "Home in Yoga"
                                ? "Home in"
                                : yogaClass.place}
                              <MdOutlineArrowRight />
                            </span>

                            <span className="ease absolute flex h-full w-full transform items-center justify-center text-warm-white text-sm transition-all duration-300 group-hover:translate-x-full">
                            { yogaClass.place === "Stockholm" ? "Interested?" : "Book a spot" }
                            </span>
                          </button>
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No classes available</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
