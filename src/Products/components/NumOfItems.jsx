import React, { useState, useEffect } from "react";

const NumOfItems = ({ selectedCategory }) => {
  const [numOfItem, setNumOfItem] = useState();

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/category/${selectedCategory}?limit=${numOfItem}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setNumOfItem(data);
      });
  }, [numOfItem]);

  const handleNumChange = (event) => {
    setNumOfItem(event.target.value);
  };
  return (
    <>
      <div>
        <label>Number of items to display</label>
        <select onChange={handleNumChange} value={numOfItem}>
          <option>0</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};

export default NumOfItems;
