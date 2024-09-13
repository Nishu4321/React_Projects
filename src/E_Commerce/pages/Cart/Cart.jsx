import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItems from "./CartItems";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(cartItems);
  console.log(totalAmount);
  return (
    <div className={`${styles.cart}`}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={`${styles.cart_items}`}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className={`${styles.checkout}`}>
          <p>Subtotal: ${totalAmount}</p>
          <button>Continue Shopping</button>
          <button>Chechout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
