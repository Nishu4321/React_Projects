import React from "react";
import styles from "./ShowCourse.module.css";

const ShowCourse = ({
  courses,
  filterCourseFunction,
  addCourseToCartFunction,
}) => {
  return (
    <>
      <div className={`${styles.product_list}`}>
        {filterCourseFunction.length === 0 ? (
          <p className={`${styles.no_results}`}>
            Sorry Geek, No mathcing Product Found.
          </p>
        ) : (
          filterCourseFunction.map((product) => (
            <div className={`${styles.product}`} key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price : {product.price} </p>
              <button
                className={`${styles.add_to_cart_btn}`}
                onClick={() => addCourseToCartFunction(product)}
              >
                Add to Shopping Cart
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ShowCourse;
