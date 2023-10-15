import { useState } from "react";
import product from "../Product-Array/Product";

const UseArrayState = () => {
  let [products] = useState(product);
  let [cart, setCart] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const [qView, setQView] = useState(null);

  const AddToCart = (id) => {
    let obj = products.find((x) => x.id == id);
    let filtered = cart.find((x) => x.id == id);
    if (filtered) {
      alert("Product is already There");
    } else {
      setCart([...cart, obj]);
    }
  };

  const AddToView = (id) => {
    let obj = product.find((x) => x.id == id);
    setShowModel(true);
    console.log(obj);
    setQView(obj);
  };

  const RemoveFromCart = (id) => {
    setCart(cart.filter((x) => x.id != id));
  };

  const IncrementQuantity = (id) => {
    let obj = cart.find((x) => x.id == id);
    obj.quantity++;
    setCart([...cart]);
  };

  const DecrementQuantity = (id) => {
    let obj = cart.find((x) => x.id == id);
    obj.quantity > 1 && obj.quantity--;
    setCart([...cart]);
  };

  return [
    products,
    cart,
    showModal,
    qView,
    setShowModel,

    {
      AddToCart,
      RemoveFromCart,
      IncrementQuantity,
      DecrementQuantity,
      AddToView,
    },
  ];
};

export default UseArrayState;
