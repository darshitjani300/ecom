import React from "react";
import styles from "./FirstBanner.module.css";

const FirstBanner = () => {
  return (
    <section className={styles.background}>
      <div className="gap-10 lg:flex md:py-0 md:px-[100px] lg:py-0 lg:px-[100px justify-center items-center text-white">
        <div className="relative lg:w-[50%] py-2">
          <div className="px-4 md:px-12 lg:px-2 xl:px-30 2xl:px-28 xl:py-10">
            <img
              src="https://mooncart.dexignzone.com/xhtml/images/video-img.png"
              alt=""
              className="youtubeImg rounded-md object-contain w-[100%] brightness-[90%]"
            />
          </div>
          <a href="https://www.youtube.com/watch?v=IT94xC35u6k">
            <img
              src="./images/play-button.png"
              alt="playbutton"
              className="absolute h-[15%] left-[50%] top-[50%] object-cover cursor-pointer translate-x-[-50%] translate-y-[-50%]"
            />
          </a>
        </div>
        <div className="lg:w-[40%] flex flex-col justify-center lg:items-start 2xl:gap-5 items-center text-center px-5 py-3 lg:px-0 lg:text-left ">
          <h1 className="text-[1.8rem] xl:text-[3rem] 2xl:text-[3.3rem] tracking-wide leading-10 xl:leading-[4rem] font-semibold mb-3">
            Enjoy the best quality and features made by MoonCart.
          </h1>
          <p className="text-[13px] 2xl:text-[1.7rem] xl:text-[1.4rem] md:leading-[22px] xl:leading-[35px] mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
          <div className="flex justify-center items-center">
            <button className="border-white text-[14px] xl:text-[1.5rem] border-[1px] px-[17px] py-[7px] mr-4">
              SHOP NOW
            </button>
            <button className="border-white text-[14px] xl:text-[1.5rem] border-[1px] px-[17px] py-[7px]">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBanner;
