import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SelectCategory from "./SelectCategory";
import DisplayItems from "./DisplayItems";

const Search = ({
  searchProducts,
  productSearchUser,
  addProductToCartFunction,
  setProducts,
  products,
}) => {
  // const [categorys, setCategory] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setCategory(data);
  //     });
  // }, []);

  return (
    <header className={`${styles.Products_header}`}>
      <h1>Search for Products</h1>
      <div className={`${styles.Products_searchbar}`}>
        <input
          type="text"
          placeholder="Search for Products..."
          value={searchProducts}
          onChange={productSearchUser}
        />
      </div>
      <div className={`${styles.Products_selecAnddis}`}>
        <SelectCategory
          addProductToCartFunction={addProductToCartFunction}
          products={products}
          setProducts={setProducts}
        />
        <DisplayItems
          addProductToCartFunction={addProductToCartFunction}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </header>
  );
};

export default Search;
