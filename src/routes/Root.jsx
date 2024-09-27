import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Root.module.css";
export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <nav className={`${styles.navbar}`}>
          <ul>
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
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
