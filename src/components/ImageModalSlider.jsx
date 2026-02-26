import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Keyboard, Pagination } from "swiper/modules";
import { AiOutlineClose } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";

export const ImageModalSlider = ({ images, startIndex, onClose }) => {
  const modalRef = useRef(null);

  // Stäng om man klickar utanför (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

    useEffect(() => {
    document.body.style.overflow = "hidden"; // blockera
    return () => {
      document.body.style.overflow = "auto"; // återställ
    };
  }, []);

  console.log(images, startIndex);

 return createPortal(
    <div
      className="fixed inset-0 top-0 bg-grayBlue/98  flex items-center justify-center z-[100] h-100vh"
    >
      <div ref={modalRef} className="relative z-[101] max-w-[90vw] max-h-[90vh] w-full">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-[102] text-white text-3xl hover:text-gray-300 cursor-pointer"
    >
      <AiOutlineClose />
    </button>
      <Swiper
        modules={[A11y, Navigation, Keyboard, Pagination]}
        effect="fade"
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        initialSlide={startIndex}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="max-w-[90vw] max-h-[90vh]"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <div className="flex flex-col items-center mx-auto">
              <img
                src={img.url}
                alt={img.alt}
                className="object-contain max-h-[80vh] w-auto cursor-pointer select-none"
                onClick={() => {
                  if (window.innerWidth > 768) {
                    onClose();
                  }
                }}
              />
              <p className="text-white font-medium mt-10 mb-10 text-left break-words max-w-full">
                {img.alt}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>,
     document.body
  );
};
