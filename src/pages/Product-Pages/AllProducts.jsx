import React, { useContext } from "react";
import { myContext } from "../../App";

const AllProducts = () => {
  let { remproducts } = useContext(myContext);
  console.log(remproducts);
  return (
    <div>
      {remproducts.map((x) => {
        return <h1 key={x.id}>{x.title}</h1>;
      })}
    </div>
  );
};

export default AllProducts;
