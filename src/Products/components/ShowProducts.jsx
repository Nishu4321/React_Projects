import React from "react";
import styles from "./ShowProducts.module.css";

const ShowProducts = ({
  filterProductFunction,
  Products,
  addToCart,
  addProductToCartFunction,
}) => {
  return (
    <>
      <div className={`${styles.product_list}`}>
        {filterProductFunction.length === 0 ? (
          <p className={`${styles.no_results}`}>
            Sorry, No mathcing Product Found.
          </p>
        ) : (
          filterProductFunction.map((product) => (
            <div className={`${styles.product}`} key={product.id}>
              <h2>{product.category}</h2>
              <h2>{product.title}</h2>
              <img src={product.image} alt="image" />
              <p>${product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <button onClick={() => addProductToCartFunction(product)}>
                Add to Cart
              </button>
              <br></br>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ShowProducts;
