import schedule from "../data/schedule.json";
import { MdArrowRightAlt } from "react-icons/md";

export const Schedule = () => {
  console.log(schedule);

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 mx-auto mt-40 laptop:mt-60 flex flex-col laptop:flex-row gap-10 laptop:justify-between text-stone-900">
        <div className="flex flex-col gap-4">
          <h3 className="font-dream text-2xl">My Classes</h3>
          <div className="flex gap-6">
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1742974189/classes-light-body-yoga-icon_oxuhkj.svg"
              className="w-16"
            />
            <h4 className="font-dream text-4xl">Schedule</h4>
          </div>
        </div>
        <div className="bg-lightGray/20 border border-solid rounded-3xl p-4 laptop:grid laptop:grid-cols-5 w-full laptop:w-3/4">
          {schedule.map((dayItem, index) => {
            const { day, classes } = dayItem;

            return (
              <div key={index} className="flex flex-col p-4">
                <h5 className="text-xl mb-4">{day}</h5>
                {classes && classes.length > 0 ? (
                  classes.map((yogaClass, classIndex) => (
                    <div
                      key={classIndex}
                      className="bg-white p-4 border border-gray-300 rounded-xl shadow-md mb-4 flex flex-col gap-2"
                    >
                      <h6 className="text-xl font-dream">{yogaClass.class}</h6>
                      <div className="flex gap-6">
                        <p className="text-sm flex items-center gap-2">
                          {yogaClass.startingAt} <MdArrowRightAlt /> {yogaClass.endingAt}
                        </p>
                        <p className="text-sm text-gray-500">
                          {yogaClass.duration}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 flex gap-x-2 flex-wrap"><span className="font-semibold">{yogaClass.place} </span>({yogaClass.address})</p>
                      <a
                        href={yogaClass.bookinglink}
                        className="bg-lightPurple text-warm-white w-fit p-2 px-3 rounded-xl "
                      >
                        Book Here
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No classes available</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
