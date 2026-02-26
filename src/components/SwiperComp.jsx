import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const SwiperComp = ({
  images,
  selectedIndex,
  onSelect,
}) => {

  console.log(images)
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      modules={[Autoplay]}
      className="rounded-xl w-full"
      scrollbar={{ draggable: true }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.thumbnail || img.url}
            alt={img.alt}
            onClick={() => onSelect(index)}
            className={`laptop:h-[300px] object-cover
              rounded-xl
              overflow-hidden
              cursor-pointer
              ${selectedIndex === !index &&
              "opacity-70 hover:opacity-100"}
            `}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};