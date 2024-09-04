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
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
