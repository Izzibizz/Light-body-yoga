import { useState } from "react";

export const PrivateSession = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is a private yoga session?",
      answer:
        "A private yoga session is a one-on-one class where you get personalized attention and guidance from the instructor. It can focus on specific poses, areas, or techniques based on your needs.",
    },
    {
      question: "Do I need to have prior yoga experience?",
      answer:
        "No, private yoga sessions are suitable for all levels of experience. Whether you're a beginner or experienced, we will tailor the class to your current level.",
    },
    {
      question: "How long is a private session?",
      answer:
        "Private sessions typically last between 60 to 90 minutes, depending on your preference and goals.",
    },
    {
      question: "What should I bring to my private yoga session?",
      answer:
        "You only need to bring yourself, comfortable clothing, and a water bottle. If you have a mat, you can bring it, though I provide mats if needed - just tell me what you prefer.",
    },
    {
      question: "Can I bring a friend?",
      answer:
        "Friends are welcome but contact me in advance. Then we can clarify whether or not the friend will participate or in what way you want to include your friend, if they should pay for the class or not.",
    },
    {
      question: "Can I book multiple sessions at once?",
      answer:
        "Yes, you can book multiple sessions, and I offer discounts when you book 5 sessions at once. This can help you make consistent progress.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40 flex flex-col text-stone-900 gap-10">
        <h3 className="font-dream text-3xl mb-10">Private sessions</h3>
        <div className="flex flex-col laptop:flex-row gap-10">
          <div className=" flex flex-col gap-4">
            <h4 className="text-2xl italic font-dream ">
              Tailored Just for You
            </h4>
            <p className="text-justify">
              Experience the full benefits of yoga with one-on-one sessions
              designed to meet your unique needs and goals. Whether you&lsquo;re
              looking to deepen your practice, improve specific postures, or
              simply find a moment of focus away from the group, these sessions
              are all about you.
            </p>
            <p className="text-justify">
              In each class, I will offer personalized guidance, paying
              attention to every detail to help you move forward. We can work on
              a particular area, explore breathwork, or dive into meditation
              techniques that best suit your current state. Every session is an
              opportunity to check in with yourself, with progress made step by
              step.
            </p>
            <div className="flex flex-col laptop:flex-row gap-10 mt-8">
              <div className="flex flex-col bg-warm-white p-6 rounded-xl gap-4 laptop:w-fit ">
                <h4 className="font-dream text-xl">
                  Book a private yoga class
                </h4>
                <h5 className="text-lg">Pricing:</h5>
                <ul>
                  <li><span className="font-medium">60 min</span> 1100 sek</li>
                  <li><span className="font-medium">Package price 3 classes</span> 3000 sek</li>
                </ul>
                <p className="text-sm">You can also book a group session, contact me for more info.</p>
                <a
                  href="mailto:therese@lightbodyyoga.se?subject=Bokning Privat yoga klass&body=Hej, jag skulle vilja boka en privat yoga klass .."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="laptop:inline-block self-center"
                >
                  <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl py-2 laptop:py-5 px-3 laptop:px-2 text-warm-white bg-purple shadow-md transition duration-300 ease-out cursor-pointer laptop:w-[150px]">
                    <span className="ease absolute hidden laptop:flex inset-0 h-full w-full -translate-x-full items-center justify-center bg-lightPurple text-white duration-300 group-hover:translate-x-0">
                      Book via mail
                    </span>
                    <span className="hidden laptop:flex ease absolute h-full w-full transform items-center justify-center text-warm-white transition-all duration-300 group-hover:translate-x-full">
                      Book now
                    </span>
                    <span className="laptop:hidden">Book via mail</span>
                  </button>
                </a>
              </div>
              <ul className="bg-warm-white p-6 rounded-xl gap-4 flex flex-col laptop:w-fit">
                <h5 className="text-lg font-medium font-dream">
                  Why Private Yoga Sessions?
                </h5>
                <li className="flex gap-4 items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743675228/circle-bullet_onsheq.svg"
                    className="h-[15px]"
                  />
                  Personalized attention and guidance
                </li>
                <li className="flex gap-4 items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743675228/circle-bullet_onsheq.svg"
                    className="h-[15px]"
                  />
                  Focus on individual goals
                </li>
                <li className="flex gap-4 items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743675228/circle-bullet_onsheq.svg"
                    className="h-[15px]"
                  />
                  Flexibility to work on specific poses, areas, or techniques
                </li>
                <li className="flex gap-4 items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743675228/circle-bullet_onsheq.svg"
                    className="h-[15px]"
                  />
                  Privacy and comfort
                </li>
                <li className="flex gap-4 items-center">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743675228/circle-bullet_onsheq.svg"
                    className="h-[15px]"
                  />
                  Accelerated progress with dedicated time
                </li>
              </ul>
              <img
                src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743677534/StudioMamama_Y8A8713-webb_c0jme5.jpg"
                alt="Private yoga session"
                className="rounded-xl object-cover laptop:hidden"
              />
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743680404/StudioMamama_Therese-lind-bjellder-Light-body.yoga_f45qgs.png"
            alt="Private yoga session"
            className="w-5/12 rounded-xl object-cover hidden laptop:block"
          />
        </div>
        <div className="flex flex-col bg-warm-white p-6 rounded-xl gap-4">
          <h4 className="font-dream text-xl">FAQ:</h4>
          <div className="flex flex-col laptop:grid grid-cols-2 gap-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md w-full cursor-pointer font-medium"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <div
                  className={`mt-2 text-gray-700 font-light ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
