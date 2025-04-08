import { useState , useEffect } from "react";
import testimonials from "../data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Testimonials = () => {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);


  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setShuffledTestimonials(shuffleArray([...testimonials]));
  }, []);

  return (
    <section className="w-full mx-auto h-full pt-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={70}
        slidesPerView={1}
        speed={3000}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 15000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        effect="fade"
        className="my-10"
      >
        {shuffledTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="w-10/12 laptop:w-1/2 h-full mx-auto mb-8 tablet:mb-10 px-10 tablet:px-20 items-center pt-12 tablet:pt-15 pb-6 text-justify bg-warm-white rounded-4xl tablet:rounded-full tablet:rounded-br-none rounded-br-none shadow-lg  tablet:text-base cursor-pointer">
              <p className="italic text-xs tablet:text-sm">
                {testimonial.text}
              </p>
              <p className="mt-4 text-right text-xs">
                - {testimonial.name}, {testimonial.year}
              </p>
              <p className="text-right text-xs">{testimonial.place}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
