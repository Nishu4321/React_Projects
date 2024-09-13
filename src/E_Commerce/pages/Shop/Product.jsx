import React, { useContext } from "react";
import styles from "./Product.module.css";
import { ShopContext } from "../../context/ShopContextProvider";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className={`${styles.product}`}>
      <img src={productImage} />
      <div className={`${styles.product_desc}`}>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className={`${styles.addToCartBtn}`}
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
