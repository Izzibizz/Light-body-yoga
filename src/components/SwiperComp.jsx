import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
      spaceBetween={20}
      modules={[Autoplay, Navigation, Pagination]}
      className="rounded-xl w-full h-[200px] laptop:h-[400px]"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.thumbnail || img.url}
            alt={img.alt}
            onClick={() => onSelect(index)}
            className={`h-[100px] laptop:h-[300px] object-cover
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