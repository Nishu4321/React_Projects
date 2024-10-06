import React, { createContext, useState } from "react";

// Create the context
export const itemContext = createContext();

// Create a provider component
export const ItemProvider = ({ children }) => {
  // State for products
  const [products, setProducts] = useState([
    // Add more products as needed
  ]);

  return (
    <itemContext.Provider value={{ products, setProducts }}>
      {children}
    </itemContext.Provider>
  );
};
