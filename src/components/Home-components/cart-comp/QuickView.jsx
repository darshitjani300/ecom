import { react, useContext } from "react";
import AddToCartBtn, { AddtoFavBtn } from "../../ui/AddToCartBtn";
import { myContext } from "../../../App";
import Sale from "../../ui/Sale";

const QuickView = () => {
  let { setShowModel, qView, IncrementQuantity, DecrementQuantity } =
    useContext(myContext);
  const closeModel = () => setShowModel(false);
  return (
    <>
      <div
        onClick={closeModel}
        className="quick-wrapper h-full fixed left-0 z-50 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)]"
      >
        <div className="fixed w-[250px] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mb-3 flex justify-center">
          <div
            onClick={(e) => e.stopPropagation()}
            className="py-5 md:px-5 w-full border-[1px] mx-auto border-black bg-white flex flex-col md:flex-row gap-5 items-center justify-center "
          >
            <div className=" justify-self-center">
              <div className="border-[1px] mt-10 border-gray-300">
                <img src={qView.img} className="h-[190px]" alt="" />
              </div>
            </div>
            <div className=" justify-self-start">
              <div>
                <Sale />
                <h1 className=" px-2 my-2 font-semibold text-[1.2rem]">
                  {qView.title}
                </h1>
                <p className="px-2 text-[10px] mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eos consequatur hic, expedita temporibus voluptatem.
                </p>
                <div className="grid grid-cols-2 pl-2 mb-5">
                  <div>
                    <h3 className="mb-2">Price</h3>
                    <h3>${qView.price}</h3>
                  </div>
                  <div>
                    <h1 className="mb-2">Quantity</h1>
                    <div className="flex gap-2 items-center">
                      <button className="px-2 bg-[#222328] text-white">
                        -
                      </button>
                      <h1 className="text-[12px] border px-3 align-middle py-1">
                        {qView.quantity}
                      </h1>
                      <button
                        onClick={() => IncrementQuantity(null, qView.quantity)}
                        className="px-2 bg-[#222328] text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" px-2 flex gap-5">
                  <AddToCartBtn qView={qView} />
                  <AddtoFavBtn />
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-5">
              <i
                onClick={closeModel}
                className="fa-solid fa-x border-[1px] text-[14px] p-2 rounded-[50%] bg-gray-50 cursor-pointer"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickView;
