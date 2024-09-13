import React from "react";
import styles from "./Shop.module.css";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const Shop = () => {
  return (
    <div className={`${styles.shop}`}>
      <div className={`${styles.shopTitle}`}>
        <h1>PedroTech Shop</h1>
      </div>
      <div className={`${styles.products}`}>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
