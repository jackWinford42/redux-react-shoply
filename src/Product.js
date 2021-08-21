import React from "react";
import {Link} from "react-router-dom";
import "./Product.css";

export default function Product({ id, name, remove, add }) {

  const handleAdd = () => add(id);

  const handleRemove = () => remove(id);

  return (
    <div className="Product">
      <Link to={`/products/${id}`}><h2>{name}</h2></Link><br></br>
      <button onClick={handleAdd}>Add to cart</button>
      <button onClick={handleRemove}>Remove from cart</button>
    </div>
  );
}