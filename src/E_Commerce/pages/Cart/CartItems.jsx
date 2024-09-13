import React, { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <div className={`${styles.cartitems}`}>
        <img src={productImage} />

        <div className={`${styles.cartdesc}`}>
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
          <div className={`${styles.countHandler}`}>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={cartItems[id]}
              onChange={(e) => {
                updateCartItemCount(Number(e.target.value), id);
              }}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
