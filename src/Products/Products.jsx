import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import ShowProducts from "./components/ShowProducts";
import styles from "./Products.module.css";
import Cart from "./components/Cart";

const Products = () => {
  const [searchProducts, setSearchProducts] = useState("");
  const [compareProducts, setCompareProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCompareProducts(data);
      });
  }, []);

  const filterProductFunction = compareProducts.filter((product) =>
    product.title.toLowerCase().includes(searchProducts.toLowerCase())
  );

  const productSearchUser = (event) => {
    setSearchProducts(event.target.value);
  };

  const addProductToCartFunction = (product) => {
    const alreadyProduct = cartProducts.find(
      (item) => item.product.id === product.id
    );
    if (alreadyProduct) {
      const latestProduct = cartProducts.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartProducts(latestProduct);
    } else {
      setCartProducts([...cartProducts, { product: product, quantity: 1 }]);
    }
  };

  const deleteProductFromCartFunction = (product) => {
    const updateCart = cartProducts.filter(
      (item) => item.product.id !== product.id
    );
    setCartProducts(updateCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <div className={`${styles.Products}`}>
        <Search
          searchProducts={searchProducts}
          productSearchUser={productSearchUser}
          addProductToCartFunction={addProductToCartFunction}
          products={products}
          setProducts={setProducts}
        />

        <div className={`${styles.ShowProducts}`}>
          <ShowProducts
            filterProductFunction={filterProductFunction}
            addProductToCartFunction={addProductToCartFunction}
          />
        </div>
        <div>
          <Cart
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            deleteProductFromCartFunction={deleteProductFromCartFunction}
            totalAmountCalculationFunction={totalAmountCalculationFunction}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
