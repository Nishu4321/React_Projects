import React, { useEffect, useState } from "react";
import styles from "./DisplayItems.module.css";
import SelectCategory from "./SelectCategory";

const DisplayItems = ({ addProductToCartFunction, products, setProducts }) => {
  const [numOfItems, setNumOfItems] = useState("");
  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${numOfItems}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [numOfItems]);

  // console.log(products);

  const handleCategoryChange = (event) => {
    setNumOfItems(event.target.value);
    // console.log(numOfItems);
  };

  return (
    <>
      <div>
        <label>Number of items to display</label>
        <select onChange={handleCategoryChange} value={numOfItems}>
          <option value={products}>0</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <div className={`${styles.display_list}`}>
          {products.map((item) => (
            <div className={`${styles.dispaly_item}`} key={item.id}>
              <h2>{item.category}</h2>
              <h2>{item.title}</h2>
              <img src={item.image} alt="image" />
              <p>${item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <button onClick={() => addProductToCartFunction(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayItems;
