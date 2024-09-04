import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";
import SearchComponents from "./components/SearchComponent/SearchComponent";
import ShowCourse from "./components/ShowCourse/ShowCourse";
import UserCart from "./components/UserCart/UserCart";

const ShoppingCart = () => {
  const [courses, setCourse] = useState([
    {
      id: 1,
      name: "GTG T-Shirt",
      price: 499,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png",
    },
    {
      id: 2,
      name: "GFG Bag",
      price: 699,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg",
    },
    {
      id: 3,
      name: "GFG Hoodie",
      price: 799,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg",
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );
  //   console.log(filterCourseFunction);

  //adding items to cart
  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(
      (item) => item.product.id === GFGcourse.id
    );
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map((item) =>
        item.product.id === GFGcourse.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  //   console.log(cartCourses);

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(
      (item) => item.product.id !== GFGCourse.id
    );
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className={`${styles.Shopping}`}>
      <SearchComponents
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />

      <div className={`${styles.shopping_main}`}>
        <ShowCourse
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCart
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
