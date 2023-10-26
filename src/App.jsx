import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Home-components/cart-comp/cart/Cart";
import { createContext, useEffect, useState } from "react";
import AllProducts from "./pages/Product-Pages/AllProducts";
import HomePage from "./pages/Home-page/HomePage";
import Shopping from "./components/Home-components/shopping/Shopping";
import Header from "./components/Home-components/header/Header";
import Navigation from "./components/Home-components/navigation/Navigation";
import UseArrayState from "./hooks/UseArrayState";
export const myContext = createContext();

function App() {
  const [
    remproducts,
    products,
    cart,
    showModal,
    qView,
    setShowModel,
    searchFilter,
    {
      AddToCart,
      SearchChange,
      RemoveFromCart,
      IncrementQuantity,
      DecrementQuantity,
      AddToView,
    },
  ] = UseArrayState();

  let [path, setPath] = useState("");
  let l = useLocation();

  useEffect(() => {
    setPath(l.pathname);
  }, [l]);

  return (
    <myContext.Provider
      value={{
        remproducts,
        products,
        SearchChange,
        AddToCart,
        cart,
        showModal,
        searchFilter,
        setShowModel,
        qView,
        RemoveFromCart,
        IncrementQuantity,
        DecrementQuantity,
        AddToView,
      }}
    >
      {path == "/" && <Header />}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
    </myContext.Provider>
  );
}
export default App;
