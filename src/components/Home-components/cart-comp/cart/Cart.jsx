import { NavLink } from "react-router-dom";
import "./cart.css";
import { useContext } from "react";
import { myContext } from "../../../../App";

const Cart = () => {
  let { cart, RemoveFromCart, IncrementQuantity, DecrementQuantity } =
    useContext(myContext);

  return (
    <>
      <main className="mb-10">
        <div className="bg-img relative ">
          <div className=" p-container absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="pb-2 text-[1.2rem]">Cart</h1>
            <div className="flex items-center">
              <NavLink to="/">
                <p className="text-[13px] pr-2" href="">
                  Home
                </p>
              </NavLink>
              <h1>&gt;</h1>
              <a className="text-[13px] pl-2" href="">
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="Information flex p-container gap-7">
          <table className=" border-gray-300 w-[65%] border-b-[1px] ">
            <thead className=" align-bottom">
              <tr>
                <th className="font-[700] px-[20px] text-[12px] text-[#24262b]">
                  Product
                </th>
                <th className="font-[700] px-[20px] text-[12px] text-[#24262b]">
                  {" "}
                </th>
                <th className="font-[700] px-[20px] text-[12px] text-[#24262b]">
                  Price
                </th>
                <th className="font-[700] px-[20px] text-[12px] text-[#24262b]">
                  Quantity
                </th>
                <th className="font-[700] px-[20px] text-[12px] text-[#24262b]">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="border-gray-300 border-t-[1px]">
              {cart.map((x) => {
                return (
                  <tr
                    key={x.id}
                    className="border-gray-300 border-b-[1px] text-center"
                  >
                    <td className=" h-[80px] w-[80px] py-[20px] ">
                      <img src={x.img} alt="" className="" />
                    </td>
                    <td className="text-[12px] font-medium">{x.title}</td>
                    <td className="text-[#5E626F] text-[13px]">${x.price}</td>
                    <td className="">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => DecrementQuantity(x.id)}
                          className="px-2 bg-black text-white"
                        >
                          -
                        </button>
                        <h1 className="text-[12px] border px-3 align-middle py-1">
                          {x.quantity}
                        </h1>
                        <button
                          className="px-2 bg-black text-white"
                          onClick={() => IncrementQuantity(x.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-[12px]">${x.quantity * x.price}</td>
                    <td className="text-[12px]">
                      <i
                        onClick={() => RemoveFromCart(x.id)}
                        className="fa-solid fa-x border-[1px] p-2 rounded-[50%] bg-gray-100 cursor-pointer"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex bg-[#efefef] px-6 flex-col h-[400px]">
            <h1 className="text-center mb-3 font-semibold py-4">Card Total</h1>
            <button className="border-[1px] border-green-600 p-1 text-[12px] mb-3">
              Bank Offer 5% CashBack
            </button>
            <div className="border-[1px] p-3 mb-3 text-[12px] cursor-pointer">
              Hdfc credit card 10% off
            </div>
            <div className="border-[1px] p-3 text-[12px] mb-3 cursor-pointer">
              Icici debit card 5% off
            </div>
            <h1 className="text-blue-500 text-[12px] mb-4">
              <i className="fa-regular fa-circle-check pr-1"></i>
              You will save $503 on this order
            </h1>
            <div className="border-[1px] my-2"></div>
            <div className="flex justify-between mb-2">
              <h1 className="text-[12px]">Total</h1>
              <h1>${cart.reduce((t, x) => (t += x.price * x.quantity), 0)}</h1>
            </div>
            <div className="border-[1px] my-2"></div>
            <button className="border-[1px] bg-black text-white p-1">
              PLACE ORDER
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
