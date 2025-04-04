import testimonials from "../data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Testimonials = () => {
  return (
    <section className="w-11/12 tablet:w-10/12 laptop:w-full mx-auto h-full pt-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={70}
        slidesPerView={1}
        speed={3000}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 20000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        effect="fade"
        className="laptop:my-10 h-fit"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="laptop:w-1/2 h-full mx-auto px-10 tablet:px-20 items-center pt-12 tablet:pt-15 pb-6 text-justify bg-warm-white rounded-4xl tablet:rounded-full tablet:rounded-br-none rounded-br-none shadow-lg  tablet:text-base cursor-pointer">
              <p className="italic text-xs tablet:text-sm">{testimonial.text}</p>
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
