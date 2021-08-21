import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetail() {
  const { id } = useParams();
  const { image_url, name, price, description } = useSelector(st => ({
    ...st.inventory[id]
  }));
  const dispatch = useDispatch();
  // add a new Product
  const add = () => {
    dispatch({type: "ADD", id:id})
  };

  // delete a Product by id
  const remove = () => {
    dispatch({type: "DELETE", id:id})
  };
  return (
    <div className="Product">
      <h2>{name}</h2><br></br>
      <img src={image_url} alt={name}/><br></br>
      <span>{price}</span><br></br>
      <span>{description}</span><br></br>
      <button onClick={add}>Add to cart</button>
      <button onClick={remove}>Remove from cart</button>
    </div>
  );
}