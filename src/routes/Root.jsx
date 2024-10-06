import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Root.module.css";
import { useEffect, useState } from "react";

export default function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedin") === "true");
    };

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <nav className={`${styles.navbar}`}>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Calculator"}
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Calculator2"}
                  >
                    Calculator2
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/TicTacToe"}
                  >
                    TicTacToe
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/DiceGame"}
                  >
                    DiceGame
                  </Link>
                </li>

                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Project"}
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/ContactUs"}
                  >
                    ContactUs
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Rock"}
                  >
                    RockPapperScissors
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/ToDoList"}
                  >
                    ToDoList
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/ShoppingCart"}
                  >
                    ShoppingCart
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Mui"}
                  >
                    Material-UI
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Api"}
                  >
                    Fetching API
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/ServerApi"}
                  >
                    ServerApi
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/E_Commerce"}
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Products"}
                  >
                    API-Products
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/QuizMain"}
                  >
                    Quiz App
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Form"}
                  >
                    Form
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/ImageSearchMain"}
                  >
                    ImageSearch
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/APOD"}
                  >
                    APOD-NASA
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Quality"}
                  >
                    Air_Quality
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Resume"}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/RealEstate"}
                  >
                    Real_Estate
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Redux"}
                  >
                    Redux
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/SocialMedia"}
                  >
                    SocialMedia
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/LogOut"}
                  >
                    LogOut
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Login"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/SignUp"}
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
