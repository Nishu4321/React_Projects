import React from "react";
import styles from "./Cart.module.css";

const Cart = ({
  cartProducts,
  setCartProducts,

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
                {cartProducts.map((product) => (
                  <li key={product.id}>
                    <div>
                      <div className={`${styles.item_info}`}>
                        <div>
                          <img src={product.image} alt="image" />
                        </div>
                        <div className={`${styles.item_details}`}>
                          <h3>{product.title}</h3>
                          <p>Price ${product.price}</p>
                        </div>
                      </div>
                      <div>
                        <div className={`${styles.item_actions}`}>
                          <button
                            className={`${styles.remove_button}`}
                            onClick={() =>
                              deleteProductFromCartFunction(product.id)
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
                                      prevItem.id === product.id
                                        ? {
                                            ...prevItem,
                                            quantity: product.quantity + 1,
                                          }
                                        : prevItem
                                  );
                                  return updateCart;
                                });
                              }}
                            >
                              +
                            </button>
                            <p className={`${styles.quant}`}>
                              {product.quantity}
                            </p>
                            <button
                              onClick={(e) => {
                                setCartProducts((preCartProduct) => {
                                  const updateCart = preCartProduct.map(
                                    (prevItem) =>
                                      prevItem.id === product.id
                                        ? {
                                            ...prevItem,
                                            quantity: Math.max(
                                              product.quantity - 1,
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
                    {/* Total Amount: {totalAmountCalculationFunction()} */}
                  </p>
                </div>
                <button
                  className={`${styles.checkout_button}`}
                  //   disabled={
                  //     cartCourses.length === 0 ||
                  //     totalAmountCalculationFunction() === 0
                  //   }
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
