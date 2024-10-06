import React, { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import axios from "axios";
import styles from "./RealEstate.module.css";
// import { ItemProvider } from "./context/itemContext";

const RealEstate = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties")
      .then((response) => setProperties(response.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array to fetch properties once on mount

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const handleContactOwner = (contact) => {
    alert(`Contacting the owner of property is ${contact}`);
  };

  return (
    // <ItemProvider>
    <div style={{}}>
      <h1 className={`${styles.gfg}`} style={{ margin: "10px 10px" }}>
        GFG
      </h1>
      <h1 style={{ marginTop: "10px" }}>Real Estate Management</h1>
      <div>
        <AddProperty onAddProperty={handleAddProperty} />
        <PropertyList
          properties={properties}
          onContactOwner={handleContactOwner}
        />
      </div>
    </div>
    // </ItemProvider>
  );
};

export default RealEstate;
