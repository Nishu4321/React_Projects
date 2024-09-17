import React, { useEffect, useState } from "react";
import styles from "./SelectCategory.module.css";

const SelectCategory = ({
  addProductToCartFunction,
  products,
  setProducts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [selectedCategory]);
  // console.log(products);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // console.log(selectedCategory);
  };

  return (
    <div>
      <label>Category:</label>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value={products}>All</option>
        <option value="men's clothing">Men's</option>
        <option value="women's clothing">Women's</option>
        <option value="electronics">Electronic</option>
        <option value="jewelery">Jewelery</option>
      </select>

      <div className={`${styles.item_list}`}>
        {products.map((item) => (
          <div className={`${styles.item}`} key={item.id}>
            <h2>{item.category}</h2>
            <h2>{item.title}</h2>
            <img src={item.image} alt="image" />
            <p>${item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <button onClick={() => addProductToCartFunction(item)}>
              Add to Cart
            </button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
