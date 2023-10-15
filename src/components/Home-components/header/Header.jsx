const Header = () => {
  return (
    <div className="px-5 md:px-[100px]">
      <header className="flex py-4 justify-between items-center gap-5">
        <div>
          <img src="./images/header_img/logo.png" alt="" className="h-[15px] xl:h-[20px]" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <select
              name=""
              id=""
              className="bg-gray-100 text-[12px] xl:text-[1rem] font-medium p-[5px] hidden lg:block"
            >
              <option value="" className="bg-white">
                All Categories
              </option>
              <option value="" className="bg-white">
                Protien
              </option>
              <option value="" className="bg-white">
                Bcaa
              </option>
            </select>
          </div>
          <div className="flex justify-center  items-center w-full lg:w-[50%] xl:w-[60%]">
            <input
              type="text"
              className="bg-gray-100 text-[12px] xl:text-[1rem] p-[4px] w-full"
              placeholder="Search for products"
            />
            <i className="fa-solid fa-magnifying-glass xl:text-[1rem] bg-gray-100 px-1 bg-none text-green-700 cursor-pointer"></i>
          </div>
        </div>
        <div className=" hidden gap-10 lg:flex">
          <div className="flex items-center gap-3">
            <img
              src="./images/header_img/ship.png"
              alt=""
              className=" h-[30px] xl:h-[35px]"
            />
            <div>
              <h3 className=" text-green-600 text-[12px] xl:text-[14px] leading-3">Free</h3>
              <h3 className="font-semibold text-[13px] xl:text-[14px]">Shipping</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="./images/header_img/support.png"
              alt=""
              className=" h-[30px] xl:h-[35px]"
            />
            <div>
              <h3 className="text-green-700 text-[12px] xl:text-[14px] leading-3">
                24/7 Support
              </h3>
              <h3 className="font-semibold text-[13px] xl:text-[14px]">+00 099 321 312</h3>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
