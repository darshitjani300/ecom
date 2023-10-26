import React, { useContext, useState } from "react";
import { myContext } from "../../App";

const AllProducts = () => {
  let { remproducts, AddToCart } = useContext(myContext);
  const [showProducts, setShowProducts] = useState(remproducts);
  console.log(remproducts);
  return (
    <section className="lg:px-[100px] py-10">
      <div className="grid grid-cols-4 gap-5">
        {showProducts.map((x) => {
          return (
            <div key={x.id} className="mainItemBox border h-full">
              <div id="onHover" className="relative">
                <img src={x.img} className="md:h-full" alt="Image" />
                <div className="w-full flex justify-between absolute top-0">
                  {x.sale && (
                    <h1 className="bg-[#24262B] text-white px-[7px] py-[2px] text-[10px] lg:text-[12px] font-medium">
                      {x.sale}
                    </h1>
                  )}
                  {x.featured && (
                    <h1 className="bg-green-800 hidden sm:block text-white px-[10px] py-[2px] text-[10px] lg:text-[12px] font-medium tracking-wide">
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
              <div className="itemInfo overflow-hidden whitespace-nowrap text-ellipsis">
                <p className="titleGreen    font-medium lg:text-[1.2rem]">
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
  );
};

export default AllProducts;
