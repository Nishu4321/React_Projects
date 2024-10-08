import React, { useEffect, useState } from "react";
import styles from "./SelectCategory.module.css";
import NumOfItems from "./NumOfItems";

const SelectCategory = ({ products, setProducts }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categorySelect, setcategorySelect] = useState("None");
  const [numOfItems, setNumOfItems] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCategoryList(data);
      });
  }, []);
  // console.log(products);

  const handleCategoryChange = (event) => {
    setcategorySelect(event.target.value);
    getCategory(event.target.value);
    setNumOfItems("None");
    // console.log(selectedCategory);
  };

  function getCategory(selectedCategory) {
    let url = "https://fakestoreapi.com/products";

    if (selectedCategory != "None") {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }

  function handleNumberChange(event) {
    setNumOfItems(event.target.value);
    getNumberOfItems(event.target.value);
  }

  function getNumberOfItems(numofitems) {
    if (categorySelect == "None") {
      fetch(`https://fakestoreapi.com/products?limit=${numofitems}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    } else {
      fetch(
        `https://fakestoreapi.com/products/category/${categorySelect}?limit=${numofitems}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    }
  }

  return (
    <div>
      <label>Category:</label>
      <select onChange={handleCategoryChange} value={categorySelect}>
        <option value={"None"}>None</option>
        {categoryList.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>

      <div>
        <label>Number of items to display</label>
        <select onChange={handleNumberChange} value={numOfItems}>
          <option value={"None"}>None</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      {/* <NumOfItems
        selectedCategory={selectedCategory}
        setProducts={setProducts}
      /> */}
    </div>
  );
};

export default SelectCategory;
