import React from "react";
import { Link } from "react-router-dom";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItem}) => {
  console.log("image",item.image);
  return <>
    <div className="CartItemCard">
      <img src={item.image} alt="product"/>
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ${item.price}`}</span>
        <p onClick={()=>deleteCartItem(item.product)}>Remove</p>
      </div>
    </div>
  </>;
};

export default CartItemCard;
