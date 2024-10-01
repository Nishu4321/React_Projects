import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // to store user data
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(input.name, input.email, input.password);
    localStorage.setItem("user", JSON.stringify(input)); // JSON.stringify() converts input object will be converted to string
    navigate("/Login");
  };
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <div className={`${styles.text}`}>Sign Up</div>
          <div className={`${styles.underline}`}> </div>
        </div>

        <form onSubmit={handelSubmit}>
          <div className={`${styles.input}`}>
            <i class="fa-regular fa-user"></i>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className={`${styles.input}`}>
            <i class="fa-regular fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className={`${styles.input}`}>
            <i class="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className={`${styles.btn_div}`}>
            <button type="submit" className={`${styles.sign_button}`}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
