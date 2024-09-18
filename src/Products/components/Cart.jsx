import React from "react";
import styles from "./Cart.module.css";

const Cart = ({
  cartProducts,
  setCartProducts,
  totalAmountCalculationFunction,
  deleteProductFromCartFunction,
}) => {
  return (
    <>
      <div className={`${styles.maindiv}`}>
        <div className={`${styles.cart}`}>
          <h2>My Cart</h2>
          {cartProducts.length === 0 ? (
            <h5>Your Cart is Empty</h5>
          ) : (
            <div>
              <ul>
                {cartProducts.map((item) => (
                  <li key={item.product.id}>
                    <div>
                      <div className={`${styles.item_info}`}>
                        <div className={`${styles.item_img}`}>
                          <img src={item.product.image} alt="image" />
                        </div>
                        <div className={`${styles.item_details}`}>
                          <h3>{item.product.title}</h3>
                          <p>Price ${item.product.price}</p>
                        </div>
                      </div>
                      <div>
                        <div className={`${styles.item_actions}`}>
                          <button
                            className={`${styles.remove_button}`}
                            onClick={() =>
                              deleteProductFromCartFunction(item.product)
                            }
                          >
                            Remove Product
                          </button>
                          <div className={`${styles.quantity}`}>
                            <button
                              onClick={(e) => {
                                setCartProducts((preCartProduct) => {
                                  const updateCart = preCartProduct.map(
                                    (prevItem) =>
                                      prevItem.product.id === item.product.id
                                        ? {
                                            ...prevItem,
                                            quantity: item.quantity + 1,
                                          }
                                        : prevItem
                                  );
                                  return updateCart;
                                });
                              }}
                            >
                              +
                            </button>
                            <p className={`${styles.quant}`}>{item.quantity}</p>
                            <button
                              onClick={(e) => {
                                setCartProducts((preCartProduct) => {
                                  const updateCart = preCartProduct.map(
                                    (prevItem) =>
                                      prevItem.product.id === item.product.id
                                        ? {
                                            ...prevItem,
                                            quantity: Math.max(
                                              item.quantity - 1,
                                              0
                                            ),
                                          }
                                        : prevItem
                                  );
                                  return updateCart;
                                });
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={`${styles.checkout_section}`}>
                <div className={`${styles.chechout_total}`}>
                  <p className={`${styles.total}`}>
                    Total Amount: {totalAmountCalculationFunction()}
                  </p>
                </div>
                <button
                  className={`${styles.checkout_button}`}
                  disabled={
                    cartProducts.length === 0 ||
                    totalAmountCalculationFunction() === 0
                  }
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
