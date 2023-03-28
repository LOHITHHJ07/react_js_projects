import React from "react";
import ItemCard from "./ItemCard";
import products from "./Items";
function ItemShow(props) {
  const { addCart } = props;
  return (
    <>
      {products.map((item, index) => {
        return (
          <ItemCard item={item} key={item.id} addCart={addCart}></ItemCard>
        );
      })}
    </>
  );
}

export default ItemShow;
