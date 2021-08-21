import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector(st => st.cart);
  console.log(cart)
  const dispatch = useDispatch();
  // add a new Product
  const add = id => {
    dispatch({type: "ADD", id:id})
  };

  // delete a Product by id
  const remove = id => {
    dispatch({type: "DELETE", id:id})
  };

  const ProductComponents = cart.map(product => (
    <Product
      remove={remove}
      key={product[Object.keys(product)[0]].name}
      name={product[Object.keys(product)[0]].name}
      add={add}
      id={Object.keys(product)[0]}
    />
  ));

  return (
    <div>
      <ul>{ProductComponents}</ul>
    </div>
  );
}

export default Cart;