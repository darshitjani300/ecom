import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#24262B] text-white">
      <div className="p-container sm:w-[90%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:text-start md:gap-10 xl:grid-cols-4 text-center gap-5 py-5">
          <div className="flex flex-col md:items-start items-center gap-5 py-5">
            <div className="flex flex-col gap-3">
              <div className="h-[25px]">
                <img
                  src="images/header_img/logo-white.png"
                  className="h-full"
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-[15px]">Address :</h1>
                  <p className="text-[14px] text-[#9FA8AA]">
                    415 Wall Street, UK, London
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[15px]">E-mail :</h1>
                  <p className="text-[14px] text-[#9FA8AA]">example@info.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[15px]">Phone :</h1>
                  <p className="text-[13px] text-[#9FA8AA]">(064) 332-1233</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-1">
              <h1>Subscribe to our Newsletter</h1>
              <form className="relative">
                <input
                  type="text"
                  className="text-black text-[1rem] p-3 w-full"
                  placeholder="Enter your Email"
                />
                <button>
                  <AiOutlineArrowRight className="text-[1.5rem] text-green-600 absolute right-5 top-0 translate-y-[50%]" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center gap-2 py-5">
            <h1 className="text-[1.2rem] font-semibold">Our Stores</h1>
            <ul className="flex flex-col gap-2 text-[15px]">
              <li>New York</li>
              <li>London SF</li>
              <li>Edinburgh</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
            </ul>
          </div>
          <div className="flex flex-col md:items-start items-center gap-2 py-5">
            <h1 className="text-[1.2rem] font-semibold">Useful Links</h1>
            <ul className="flex flex-col gap-2">
              <li>Privacy policy</li>
              <li>Returns</li>
              <li>Terms & Condition</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>
          <div className="flex flex-col md:items-start items-center gap-2 py-5">
            <h1 className="text-[1.2rem] font-semibold">Footer Menu</h1>
            <ul className="flex flex-col gap-2">
              <li>Instagram Profile</li>
              <li>New Collection</li>
              <li>Woman Dress</li>
              <li>Contack Us</li>
              <li>Latest News</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
