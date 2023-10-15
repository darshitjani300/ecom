import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="scrollDown top-0 sticky z-30 hidden lg:block">
      <nav className="bg-[#24262B] flex items-center justify-between text-white p-container py-3">
        <div className="flex items-center gap-2 ml-2">
          <i className="fa-solid fa-bars xl:text-[1rem]"></i>
          <h3 className="tracking-[1px] text-[12px] xl:text-[1rem]">BROWSE CATEGORIES</h3>
          <i className="fa-solid fa-chevron-down pl-1 text-[10px]"></i>
        </div>
        <div className="flex items-center w-[45%]">
          <ul className="flex items-center justify-between w-[100%]">
            <li className="cursor-pointer text-[11px] xl:text-[1rem]">
              <NavLink to="/"> Home</NavLink>
              <i className="fa-solid fa-chevron-down pl-1 xl:pl-3 text-[10px]"></i>
            </li>
            <li className="cursor-pointer text-[11px] xl:text-[1rem]">
              <NavLink to="/shop">Shop</NavLink>

              <i className="fa-solid fa-chevron-down pl-1 xl:pl-3 text-[10px]"></i>
            </li>
            <li className="cursor-pointer text-[11px] xl:text-[1rem]">
              {/* <NavLink to="hero">Blog</NavLink> */}
              Blog
              <i className="fa-solid fa-chevron-down pl-1 xl:pl-3 text-[10px]"></i>
            </li>
            <li className="cursor-pointer text-[11px] xl:text-[1rem]">
              PAGES
              <i className="fa-solid fa-chevron-down pl-1 xl:pl-3 text-[10px]"></i>
            </li>
            <li className="cursor-pointer text-[11px] xl:text-[14px]">CONTACT US</li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <button className="text-[12px] xl:text-[1rem]">LOGIN / REGISTER</button>
          {/* <NavLink to="cart"> */}{" "}
          <NavLink to="/cart">
            {" "}
            <i className="fa-solid fa-cart-shopping ml-3 text-[13px] xl:text-[1rem] cursor-pointer"></i>
          </NavLink>
          {/* </NavLink> */}
          <i className="fa-regular fa-heart ml-3 text-[13px] xl:text-[1.1rem] cursor-pointer"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
