import { Outlet, Navigate } from "react-router-dom";

const LoginRoute = () => {
  const loggedin = localStorage.getItem("loggedin");

  return loggedin ? <Navigate to="/Calculator" replace /> : <Outlet />;
};

export default LoginRoute;
