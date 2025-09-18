import React, { useEffect, useState, useContext } from "react";
import "./ViewCart.css";
import { cartContext } from "./cartContext";
import './Product'


const Cart = () => {

  const {cart, setCart} = useContext(cartContext);

  const [total, setTotal] = useState(0);

  const removeCart = (productToRemove) => {
    setCart(cart.filter((c) => c.id !== productToRemove.id))
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amount),0));
  }, [cart])
  

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-product">
          <div className="image">
            <img src={product.image} alt="image" />
          </div>
          <div className="content">
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amount}</p>
            </div>
            <div>
              <button onClick={() => removeCart(product)}>Remove From Cart</button>
            </div>
          </div>
        </div>
          )
        })}
      </div>
      <h2 className="cart-amount">Total Amount Rs: {total}</h2>
    </>
  );
};

export default Cart;
