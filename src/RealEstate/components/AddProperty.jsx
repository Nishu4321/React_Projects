// src/components/AddProperty.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./AddProperty.module.css";

const AddProperty = ({ onAddProperty }) => {
  const [newProperty, setNewProperty] = useState({
    title: "",
    description: "",
    image: "",
    contact: "",
  });

  const handleAddProperty = () => {
    // Submit a new property
    axios
      .post("http://localhost:5000/api/properties", newProperty)
      .then((response) => {
        // Notify the parent component about the new property
        onAddProperty(response.data);

        // Clear the newProperty state for the next entry
        setNewProperty({
          title: "",
          description: "",
          image: "",
          contact: "",
        });
      })
      .catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <div className={`${styles.add_div}`}>
      <h2 style={{ color: "black" }}>Add a New Property</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProperty();
        }}
      >
        <div className={`${styles.form_row}`}>
          <label>
            Title:
            <input
              type="text"
              value={newProperty.title}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  title: e.target.value,
                })
              }
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={newProperty.description}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  description: e.target.value,
                })
              }
              required
            />
          </label>
        </div>
        <div className={`${styles.form_row}`}>
          <label>
            Image URL:
            <input
              type="text"
              value={newProperty.image}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  image: e.target.value,
                })
              }
              required
            />
          </label>
          <label>
            Contact:{" "}
            <input
              type="text"
              value={newProperty.contact}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  contact: e.target.value,
                })
              }
              required
            />
          </label>
        </div>
        <div className={`${styles.add_btn}`}>
          <button type="submit" style={{ backgroundColor: "blue" }}>
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
