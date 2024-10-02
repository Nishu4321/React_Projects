import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./routes/Root.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Calculator from "./Calculator/Calculator.jsx";
import Calculator2 from "./Calculator2/Calculator2.jsx";
import TicTacToe from "./TicTacToe/TicTacToe.jsx";
import DiceGame from "./DiceGame/DiceGame.jsx";
import Project from "./Project/Project.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Rock from "./RockPaSc/Rock.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";
import Mui from "./MUI/Mui.jsx";
import Api from "./Api/Api.jsx";
import ServerApi from "./Server/ServerApi.jsx";
import E_Commerce from "./E_Commerce/E_Commerce.jsx";
import Cart from "./E_Commerce/pages/Cart/Cart.jsx";
import ShopContextProvider from "./E_Commerce/context/ShopContextProvider.jsx";
import Products from "./Products/Products.jsx";
import QuizMain from "./Quiz App/QuizMain.jsx";
import Form from "./Form/Form.jsx";
import ImageSearchMain from "./ImageSearch/ImageSearchMain.jsx";
import APOD from "./APOD_NASA/APOD.jsx";
import Quality from "./Air_Quality/Quality.jsx";
import Login from "./LogIn/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import LogOut from "./LogOut/LogOut.jsx";
import ProtectedRouts from "./ProtectedRouts/ProtectedRouts.jsx";
import LoginRoute from "./ProtectedRouts/LoginRoute.jsx";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("loggedin") === "true"
  // );

  // useEffect(() => {
  //   const handelStorageChange = () => {
  //     setIsLoggedIn(localStorage.getItem("loggedin") === "true");
  //   };

  //   window.addEventListener("storage", handelStorageChange);
  //   return () => {
  //     window.addEventListener("storage", handelStorageChange);
  //   };
  // }, []);

  function ErrorPage(params) {
    return <div>Error</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,

      children: [
        {
          index: true,
          element: <Login />,
        },

        // Unauthorized routes
        {
          element: <LoginRoute />,
          children: [
            {
              path: "Login",
              element: <Login />,
            },

            {
              path: "SignUp",
              element: <SignUp />,
            },
          ],
        },

        // protected routs
        {
          element: <ProtectedRouts />,
          children: [
            {
              path: "LogOut",
              element: <LogOut />,
            },

            {
              path: "Calculator",
              element: <Calculator />,
            },
            {
              path: "Calculator2",
              element: <Calculator2 />,
            },
            {
              path: "TicTacToe",
              element: <TicTacToe />,
            },
            {
              path: "DiceGame",
              element: <DiceGame />,
            },
            {
              path: "Project",
              element: <Project />,
            },
            {
              path: "ContactUs",
              element: <ContactUs />,
            },
            {
              path: "Rock",
              element: <Rock />,
            },
            {
              path: "ToDoList",
              element: <ToDoList />,
            },
            {
              path: "ShoppingCart",
              element: <ShoppingCart />,
            },
            {
              path: "Mui",
              element: <Mui />,
            },
            {
              path: "Api",
              element: <Api />,
            },
            {
              path: "ServerApi",
              element: <ServerApi />,
            },
            {
              path: "/E_Commerce",
              element: <E_Commerce />,
            },
            {
              path: "/E_Commerce/Cart",
              element: <Cart />,
            },
            {
              path: "Products",
              element: <Products />,
            },
            {
              path: "QuizMain",
              element: <QuizMain />,
            },
            {
              path: "Form",
              element: <Form />,
            },
            {
              path: "ImageSearchMain",
              element: <ImageSearchMain />,
            },
            {
              path: "APOD",
              element: <APOD />,
            },
            {
              path: "Quality",
              element: <Quality />,
            },
          ],
        },

        /* the rest of the routes */
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
