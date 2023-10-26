import React, { useContext, useState } from "react";
import { myContext } from "../../App";
import { motion } from "framer-motion";

const AllProducts = () => {
  let { remproducts, AddToCart } = useContext(myContext);
  const [showProducts, setShowProducts] = useState(remproducts);
  console.log(remproducts);
  return (
    <section className="xl:px-[100px] py-10">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid xl:grid-cols-4 overflow-hidden lg:gap-3 gap-5">
        {showProducts.map((x) => {
          return (
            <div
              key={x.id}
              className="mainItemBox mx-3 border overflow-hidden h-full"
            >
              <div className="relative">
                <img
                  src={x.img}
                  className="h-[300px] object-contain"
                  alt="Image"
                />
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
              </div>
              <div className="itemInfo">
                <p className=" hover:text-green-600 hover:duration-200 ease-in cursor-pointer font-medium lg:text-[1rem]">
                  {x.title}
                </p>
                <div>
                  <del className="lg:text-[1rem]">${x.price} </del>
                  <span className="lg:text-[1rem] pl-2 text-green-600 font-medium">
                    ${x.price}
                  </span>
                </div>
                <motion.div whileTap={{ scale: 0.8 }} className="w-full py-2">
                  <button
                    onClick={() => AddToCart(x.id)}
                    className="bg-[#24262b] font-semibold border-[1px] border-transparent text-[12px] w-full lg:text-[15px] text-white px-[10px] py-[6px] hover:bg-white hover:text-black hover:border-black duration-300 ease-in"
                  >
                    ADD TO CART
                  </button>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllProducts;
