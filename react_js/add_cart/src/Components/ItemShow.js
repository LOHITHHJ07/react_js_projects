import React from "react";
import ItemCard from "./ItemCard";
import products from "./Items";
// import { useState } from "react";

function ItemShow(props) {
  const { addCart } = props;
  // const addCart = (item) => {
  //   setCart([...cart, item]);
  // };

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
