import React from "react";
import styles from "./SearchComponent.module.css";

const SearchComponent = ({ searchCourse, courseSearchUserFunction }) => {
  return (
    <header className={`${styles.Shopping_header}`}>
      <h1>GeeksforGeeks Shopping Cart</h1>
      <div className={`${styles.Shopping_searchbar}`}>
        <input
          type="text"
          placeholder="Serach for GFG Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
};

export default SearchComponent;
