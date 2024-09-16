import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./routes/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function ErrorPage(params) {
  return <div>Error</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Calculator /> },
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
      /* the rest of the routes */
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
);
