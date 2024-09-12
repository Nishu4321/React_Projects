import axios from "axios";
import React from "react";
import AxiosGet from "./components/AxiosGet";

const AxiosDelete = () => {
  axios.delete("http://localhost:3000/todos/5").then("deleted");
  return (
    <div>
      <AxiosGet />
    </div>
  );
};

export default AxiosDelete;
