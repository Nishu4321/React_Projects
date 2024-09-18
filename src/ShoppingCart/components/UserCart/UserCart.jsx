//components/UserCartComponent.js

import React from "react";
import styles from "./UserCart.module.css";

function UserCart({
  cartCourses,
  deleteCourseFromCartFunction,
  totalAmountCalculationFunction,
  setCartCourses,
}) {
  return (
    <div className={`${styles.maindiv}`}>
      <div
        className={`${styles.cart}  ${
          cartCourses.length > 0 ? styles.active : ""
        }`}
      >
        <h2>My Cart</h2>
        {cartCourses.length === 0 ? (
          <p className={`${styles.empty_cart}`}>Geek, your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartCourses.map((item) => (
                <li key={item.product.id} className={`${styles.cart_item}`}>
                  <div>
                    <div className={`${styles.item_info}`}>
                      <div className={`${styles.item_img}`}>
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className={`${styles.item_details}`}>
                        <h3>{item.product.name}</h3>
                        <p>Price: ₹{item.product.price}</p>
                      </div>
                    </div>
                    <div>
                      <div className={`${styles.item_actions}`}>
                        <button
                          className={`${styles.remove_button}`}
                          onClick={() =>
                            deleteCourseFromCartFunction(item.product)
                          }
                        >
                          Remove Product
                        </button>
                        <div className={`${styles.quantity}`}>
                          <button
                            style={{ margin: "1%" }}
                            onClick={(e) => {
                              setCartCourses((prevCartCourses) => {
                                const updatedCart = prevCartCourses.map(
                                  (prevItem) =>
                                    prevItem.product.id === item.product.id
                                      ? {
                                          ...prevItem,
                                          quantity: item.quantity + 1,
                                        }
                                      : prevItem
                                );
                                return updatedCart;
                              });
                            }}
                          >
                            +
                          </button>
                          <p className={`${styles.quant}`}>
                            {product.quantity}{" "}
                          </p>
                          <button
                            onClick={(e) => {
                              setCartCourses((prevCartCourses) => {
                                const updatedCart = prevCartCourses.map(
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
                                return updatedCart;
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
                  Total Amount: ₹{totalAmountCalculationFunction()}
                </p>
              </div>
              <button
                className={`${styles.checkout_button}`}
                disabled={
                  cartCourses.length === 0 ||
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
  );
}

export default UserCart;
