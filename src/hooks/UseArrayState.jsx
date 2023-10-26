import { useState } from "react";
import product from "../Product-Array/Product";
import product2 from "../Product-Array/Product2";

const UseArrayState = () => {
  let [aProducts] = useState(product2);
  let [products] = useState(product);
  let [cart, setCart] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const [qView, setQView] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  const AddToCart = (id, qview) => {
    if (id) {
      let obj = products.find((x) => x.id == id);
      let filtered = cart.find((x) => x.id == id);
      if (filtered) {
        alert("Product is already There");
      } else {
        setCart([...cart, obj]);
      }
    }

    if (qview) {
      setCart([...cart, qview]);
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

  const IncrementQuantity = (id, qview) => {
    let obj = cart.find((x) => x.id == id);
    console.log(obj);
    if (obj) {
      obj.quantity++;
      setCart([...cart]);
    }
    if (qview) {
      qview++;
      setQView({ ...qView, quantity: qview });
    }
  };

  const DecrementQuantity = (id) => {
    let obj = cart.find((x) => x.id == id);
    obj.quantity > 1 && obj.quantity--;
    setCart([...cart]);
  };
  const SearchChange = (e) => {
    let Searched = products.filter((x) =>
      x.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchFilter(Searched);
    console.log(Searched);
  };

  return [
    products,
    aProducts,
    cart,
    showModal,
    qView,
    setShowModel,
    searchFilter,

    {
      AddToCart,
      RemoveFromCart,
      IncrementQuantity,
      SearchChange,
      DecrementQuantity,
      AddToView,
    },
  ];
};

export default UseArrayState;
