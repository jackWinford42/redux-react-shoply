import React from "react";
import "./Product.css";

export default function ProductDetail({ id, name, price, description, image_url, remove, add }) {

  const handleAdd = () => add(id);

  const handleRemove = () => remove(id);

  return (
    <div class="Product">
      <h2>{name}</h2><br></br>
      <img src={image_url} alt={name}/><br></br>
      <span>{price}</span><br></br>
      <span>{description}</span><br></br>
      <button onClick={handleAdd}>Add to cart</button>
      <button onClick={handleRemove}>Remove from cart</button>
    </div>
  );
}