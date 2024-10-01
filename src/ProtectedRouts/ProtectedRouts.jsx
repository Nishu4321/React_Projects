import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRouts = () => {
  const loggedin = localStorage.getItem("loggedin");

  return loggedin ? <Outlet /> : <Navigate to={"/Login"} />;
};
export default ProtectedRouts;
