import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import ShowProducts from "./components/ShowProducts";
import styles from "./Products.module.css";
import Cart from "./components/Cart";

const Products = () => {
  const [searchProducts, setSearchProducts] = useState("");
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);

  const filterProductFunction = products.filter((product) =>
    product.title.toLowerCase().includes(searchProducts.toLowerCase())
  );

  const productSearchUser = (event) => {
    setSearchProducts(event.target.value);
  };

  const addProductToCartFunction = (product) => {
    const alreadyProduct = cartProducts.find((item) => item.id === product.id);
    if (alreadyProduct) {
      const latestProduct = cartProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartProducts(latestProduct);
    } else {
      setCartProducts([...cartProducts, { title: product, quantity: 1 }]);
    }
  };

  const deleteProductFromCartFunction = () => {};

  return (
    <div>
      <div className={`${styles.Products}`}>
        <Search
          searchProducts={searchProducts}
          productSearchUser={productSearchUser}
          addProductToCartFunction={addProductToCartFunction}
        />

        <div className={`${styles.ShowProducts}`}>
          <ShowProducts
            products={products}
            filterProductFunction={filterProductFunction}
            addProductToCartFunction={addProductToCartFunction}
          />
        </div>
        <div>
          <Cart
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            deleteProductFromCartFunction={deleteProductFromCartFunction}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
