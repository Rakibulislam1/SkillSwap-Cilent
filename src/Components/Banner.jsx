// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../src/assets/Images/banner1.jpg";
import banner2 from "../../src/assets/Images/banner2.jpg";
import banner3 from "../../src/assets/Images/banner3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[50vh] md:h-[80vh] lg:h-[100vh]"
    >
      <div className="relative">
        <SwiperSlide className="relative object-cover w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-purple-700 before:opacity-20">
          <img
            className="md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat"
            src={banner1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative object-cover w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-purple-700 before:opacity-20">
          <img
            className="md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat"
            src={banner2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative object-cover w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-purple-700 before:opacity-20">
          <img
            className="md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat"
            src={banner3}
            alt=""
          />
        </SwiperSlide>
      </div>
      <div className="absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="lg:text-4xl md:text-3xl text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
          Your Title Blah Blah
        </h2>
        <div className="flex lg:gap-10 gap-5 justify-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            dolorum.
          </p>
        </div>
      </div>
    </Swiper>
  );
};

export default Banner;
