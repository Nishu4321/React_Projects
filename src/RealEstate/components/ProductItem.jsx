import React from "react";
// import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import axios from "axios";
// Assuming you have some styles for this component

const ProductItem = ({ product }) => {
  const { title, contact, description, image } = product;

  const handleBuyNow = () => {
    alert(`You have purchased: ${title} property`);
  };

  const handleContactOwner = () => {
    alert(`Owners Contact Number: ${contact}`); // Call the contact owner function passed as prop
  };

  const handleDeleteProperty = (propertyId) => {
    console.log({ propertyId });
    axios
      .delete(`http://localhost:5000/api/properties/${propertyId}`)

      .then((response) => {
        // Filter out the deleted property from the state
        setProperties((prevProperties) =>
          prevProperties.filter((property) => property._id !== propertyId)
        );
      })
      .catch((error) => console.error(error));
    window.location.reload();
  };

  // console.log(product);
  return (
    <div className={`${styles.property_div}`}>
      <li className={`${styles.propertydiv}`}>
        <div className={`${styles.property_content}`}>
          <p>Name: {title}</p>
          <p>Contact: {contact}</p>
          <p>Description: {description}</p>
          <img src={image} alt="img" />
          <div className={`${styles.three_btn}`}>
            <button onClick={handleBuyNow}>Buy Now</button>
            <button
              onClick={() => {
                handleDeleteProperty(product._id);
              }}
              className={styles.delete_btn}
            >
              Delete
            </button>
            <button onClick={handleContactOwner} className={styles.contact_btn}>
              Contact Owner
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

// PropTypes to enforce type checking
// ProductItem.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     description: PropTypes.string,
//   }).isRequired,
// };

export default ProductItem;
