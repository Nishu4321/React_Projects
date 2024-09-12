import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosGet = () => {
  const [getTodos, setGetTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setGetTodos(res.data);
    });
  }, []);

  return (
    <div>
      {getTodos.map((todo) => (
        <div key={todo.id}>
          <p>Task Id: {todo.id}</p>
          <p>Task Title: {todo.title}</p>
          <p>Task Description: {todo.description}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default AxiosGet;
