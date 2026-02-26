import { useNavigate } from "react-router-dom";
import upcomingRetreats from "../data/upcomingRetreats.json";

export const UpcomingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-lightGray relative px-8 py-28 tablet:px-20 tablet:py-20 laptop:px-40 laptop:py-32 text-stone-900">
      <div className="gap-8 laptop:gap-10 flex flex-col laptop:w-10/12 mx-auto">

        <div className="flex gap-4 items-center">
          <h3 className="font-dream text-3xl text-center">Upcoming</h3>
          <img
            src="https://res.cloudinary.com/dknoal1v0/image/upload/v1744219575/hands-up_hz8vtq.svg"
            alt="hands up symbol"
            className="w-[80px] h-[80px]"
          />
        </div>

        <div className="flex flex-col laptop:flex-row gap-10">

          {upcomingRetreats.map((retreat) => (
            <div
              key={retreat.id}
              className="flex flex-col bg-warm-white p-4 rounded-xl gap-4"
            >
              <h4 className="font-dream text-xl">
                {retreat.category}
              </h4>

              <div className="flex flex-col gap-2">
                <h5 className="font-bold flex gap-4">
                  {retreat.date}
                  <span className="italic font-semibold">
                    {retreat.title}
                  </span>
                </h5>

                <p>
                  <span className="font-medium">
                    {retreat.format}
                  </span>
                </p>

                <p>
                  <span className="font-medium">Place:</span>{" "}
                  <a
                    href={retreat.place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic"
                  >
                    {retreat.place.name}
                  </a>
                  , {retreat.place.location}
                </p>

                <p>
                  <span className="font-medium">
                    Creators and leaders:
                  </span>{" "}
                  {retreat.leaders.map((leader, i) => (
                    <span key={leader.name}>
                      {leader.url ? (
                        <a
                          href={leader.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic"
                        >
                          {leader.name}
                        </a>
                      ) : (
                        leader.name
                      )}
                      {i < retreat.leaders.length - 1 && " & "}
                    </span>
                  ))}
                </p>

                <p>
                  <span className="font-medium">
                    Price:
                  </span>{" "}
                  {retreat.price}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  className="group rounded-2xl py-2 px-3 bg-purple text-warm-white"
                  onClick={() => navigate(retreat.navigateTo)}
                >
                  Read more
                </button>

                <a
                  href={retreat.bookingMail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-2xl py-2 px-3 bg-purple text-warm-white">
                    Book via mail
                  </button>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};