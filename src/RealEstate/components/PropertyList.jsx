import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import styles from "./PropertyList.module.css";

const PropertyList = ({ onDeleteProperty, onContactOwner }) => {
  const [products, setProducts] = useState([]);
  //   const { products } = useContext(itemContext);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  // Keep a local state for sorted products
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedType, setSelectedType] = useState("all");
  // 'all' represents no type filter
  console.log(products);
  //   useEffect(() => {
  //     setSortedProducts([...products]);
  //   }, [products]);

  console.log({ products });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/properties"
        ); // Update with your API endpoint
        setProducts(response.data);
        setSortedProducts(response.data); // Initialize sortedProducts with fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === "all") {
      // Reset the type filter
      setSortedProducts([...products]);
    } else {
      const filtered = products.filter(
        (product) => product.type === selectedType
      );
      setSortedProducts(filtered);
    }
  };

  return (
    <div className={`${styles.prdt_list}`}>
      <h2>Product List</h2>
      <div className={`${styles.property_display}`}>
        <ul className={`${styles.item_card}`}>
          {sortedProducts.map((product) => (
            <ProductItem product={product} />
          ))}
        </ul>
      </div>

      <div className={`${styles.filter_btn}`}>
        <div className={`${styles.labeldiv}`}>
          <label>
            Min Price:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <button onClick={() => handleFilterByPriceRange()}>
          Filter by Price Range
        </button>
        <label>
          Filter by Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All</option>

            {/* Add more options as needed */}
          </select>
        </label>
        <button onClick={handleFilterByType}>Filter by Type</button>
      </div>

      <div className={`${styles.buy_now_btn}`}>Buy Now</div>
    </div>
  );
};

export default PropertyList;
