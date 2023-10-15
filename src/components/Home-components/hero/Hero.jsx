import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AddToCartBtn from "../../ui/AddToCartBtn";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide className="bg-[#F3F3F3] flex flex-col justify-start items-center px-5 py-5">
            <div className="flex px-5 flex-col items-center">
              <h1 className=" text-[3.5rem]  xl:text-[3rem] xl:leading-[60px] font-bold tracking-[1px] text-[#24262B]">
                SALE 40%
              </h1>
              <h2 className="text-[#24262B] xl:text-[1.7rem] text-[1.5rem] font-[600] tracking[1px]">
                For Gym, yoga, running.
              </h2>
              <p className="text-[#5E626F] xl:text-[1.3rem] text-[1rem] mt-1">
                No code need. Plus free shipping on $99+ orders!
              </p>
            </div>
            <div className="mt-5 flex gap-5">
              <AddToCartBtn />
              <button className="border-[1px] border-black p-1 tracking-[1px] px-2 text-[14px] xl:text-[1rem]">
                VIEW DETAILS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#F3F3F3] flex flex-col justify-start items-center px-5 py-5">
            <div className="flex px-5 flex-col items-center">
              <h1 className="text-[3.3rem] xl:text-[3rem] xl:leading-[60px] font-bold tracking-[1px] leading-[60px] text-[#24262B]">
                SALE 50%{" "}
              </h1>
              <h2 className="text-[#24262B] text-[1.5rem] xl:text-[1.7rem] font-[600] tracking[1px]">
                For Meditation, yoga, Asana.
              </h2>
              <p className="text-[#5E626F]  xl:text-[1.3rem] text-[1rem] mt-1 xl:mt-0">
                No code need. Plus free shipping on $99+ orders!
              </p>
            </div>
            <div className="mt-5 flex gap-5">
              <AddToCartBtn />
              <button className="border-[1px] border-black p-1 tracking-[1px] px-2 text-[14px] xl:text-[1rem]">
                VIEW DETAILS
              </button>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src="./images/hero_img/hero1.jpg" alt="Gym Hero" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./images/hero_img/hero2.jpg" alt="Gym Hero" />
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
