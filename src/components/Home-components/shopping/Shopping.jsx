import { useContext, useState } from "react";
import "./Shopping.css";
import { myContext } from "../../../App";
import QuickView from "../cart-comp/QuickView";
import { NavLink } from "react-router-dom";

const Shopping = () => {
  let { products, AddToCart, showModal, AddToView } = useContext(myContext);
  let [showProducts, setShowProducts] = useState(products);

  const GymProducts = () => {
    let gym = products.filter((x) => x.catergories == "GYM");
    setShowProducts(gym);
  };
  const YogaProducts = () => {
    let yoga = products.filter((x) => x.catergories == "YOGA");
    setShowProducts(yoga);
  };
  const AccesoriesProducts = () => {
    let acce = products.filter((x) => x.catergories == "ACCESORIES");
    setShowProducts(acce);
  };

  return (
    <>
      <section className="lg:py-0 lg:px-[100px] px-5">
        <div className="my-6 ">
          <h1 className="text-[1.2rem] xl:text-[1.6rem] leading-8 font-semibold mb-3">
            Most Popular Products
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <ul className="lg:w-[50%] flex gap-3 lg:gap-0 justify-between  font-medium mb-3">
              <li
                onClick={() => setShowProducts(products)}
                className="cursor-pointer text-[11px] lg:text-[15px] text-green-800"
              >
                ALL PRODUCTS{" "}
                <span className=" font-normal text-[10px] lg:text-[14px]">
                  (20)
                </span>
              </li>
              <li
                onClick={GymProducts}
                className="cursor-pointer text-[11px] lg:text-[15px] "
              >
                GYM{" "}
                <span className="font-normal text-[10px] lg:text-[14px]">
                  (10)
                </span>
              </li>
              <li
                className="cursor-pointer text-[11px] lg:text-[15px]"
                onClick={YogaProducts}
              >
                YOGA{" "}
                <span className=" font-normal text-[10px] lg:text-[14px]">
                  (2)
                </span>
              </li>
              <li
                className="cursor-pointer text-[11px] lg:text-[15px]"
                onClick={AccesoriesProducts}
              >
                ACCESORIES{" "}
                <span className=" font-normal text-[10px lg:text-[14px]]">
                  (8)
                </span>
              </li>
            </ul>
            <div>
              <NavLink to="/allproducts">
                <a className="text-[12px] font-medium lg:text-[1rem]" href="#">
                  See all Products
                </a>
              </NavLink>
              <i className="fa-solid fa-greater-than text-[9px] lg:text-[12px] pl-2"></i>
            </div>
          </div>
        </div>
        <div className=" grid relative lg:grid-cols-3 justify-self-center my-7">
          {showProducts.map((x) => {
            return (
              <div key={x.id} className="mainItemBox h-full">
                <div id="onHover" className="relative">
                  <img src={x.img} className="h-full" alt="Image" />
                  <div className="w-full flex justify-between absolute top-0">
                    <h1 className="bg-[#24262B] text-white px-[7px] py-[2px] text-[10px] lg:text-[12px] font-medium">
                      {x.sale}
                    </h1>
                    {x.featured && (
                      <h1 className="bg-green-800 text-white px-[10px] py-[2px] text-[10px] lg:text-[12px] font-medium tracking-wide">
                        {x.featured}
                      </h1>
                    )}
                  </div>
                  <div className="imageCart">
                    <button
                      onClick={() => AddToView(x.id)}
                      className=" bg-[#24262b] text-white px-[10px] text-[12px] lg:text-[15px] py-[2px]"
                    >
                      Quick view
                    </button>
                    <button>
                      <i className="fa-regular fa-heart bg-[#24262b] text-white text-[12px] lg:text-[15px] px-[10px] py-[6px]"></i>
                    </button>
                    <button onClick={() => AddToCart(x.id)}>
                      <i className="fa-sharp fa-solid fa-cart-shopping bg-[#24262b] text-[12px] lg:text-[15px] text-white px-[10px] py-[6px]"></i>
                    </button>
                  </div>
                </div>
                <div className="itemInfo">
                  <p className="titleGreen font-medium lg:text-[1.2rem]">
                    {x.title}
                  </p>
                  <div>
                    <del className="lg:text-[1rem]">${x.price} </del>
                    <span className="lg:text-[1rem] pl-2 text-green-600 font-medium">
                      ${x.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {showModal && <QuickView />}
    </>
  );
};

export default Shopping;
