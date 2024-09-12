import axios from "axios";
import React from "react";
import AxiosGet from "./components/AxiosGet";

const AxiosPut = () => {
  axios.put("http://localhost:3000/todos/1", {
    title: "nishanth",
    description: "nishu",
  });
  return (
    <div>
      <AxiosGet />
    </div>
  );
};

export default AxiosPut;
