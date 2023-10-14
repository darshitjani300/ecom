import { useContext } from "react";
import AddToCartBtn, { AddtoFavBtn } from "../../ui/AddToCartBtn";
import { myContext } from "../../../App";

const QuickView = () => {
  let { setShowModel } = useContext(myContext);
  const closeModel = () => setShowModel(false);
  return (
    <>
      <div
        onClick={closeModel}
        className="quick-wrapper fixed left-0 z-50 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)]"
      >
        <div className=" p-container fixed z-50 top-[95px] mb-3">
          <div
            onClick={(e) => e.stopPropagation()}
            className="py-5 px-5 border-[1px] w-[80%] mx-auto border-blac bg-white grid grid-cols-2"
          >
            <div className=" justify-self-center">
              <div className="border-[1px] border-gray-300">
                <img
                  src="https://mooncart.dexignzone.com/xhtml/images/shop/product/12.png"
                  alt=""
                />
              </div>
            </div>
            <div className=" justify-self-start">
              <div>
                <Sale />
                <h1 className="my-2 font-semibold text-[1.2rem]">
                  Protien Supplements
                </h1>
                <p className="text-[10px] mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eos consequatur hic, expedita temporibus voluptatem.
                </p>
                <div className="grid grid-cols-2 mb-5">
                  <div>
                    <h3 className="mb-2">Price</h3>
                    <h3>$124.00</h3>
                  </div>
                  <div>
                    <h1 className="mb-2">Quantity</h1>
                    <div className="flex gap-2 items-center">
                      <button className="px-2 bg-[#222328] text-white">
                        -
                      </button>
                      <h1 className="text-[12px] border px-3 align-middle py-1">
                        2
                      </h1>
                      <button className="px-2 bg-[#222328] text-white">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <AddToCartBtn />
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
