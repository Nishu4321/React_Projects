import React, { useState } from "react";
import styles from "./ToDoList.module.css";
// ("use client");
const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 0 && desc.length > 0) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    } else {
      alert("please enter the task");
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (index) => {
    let copytask = [...mainTask];
    copytask.splice(index, 2);
    setMainTask(copytask);
  };

  // const emptyTask = () => {
  //   if (title == " " && desc == " ") {
  //     setDesc("");
  //     setTitle("");
  //   }
  // };

  let renderTask = <h3>No task available</h3>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <div key={index} className={`${styles.data}`}>
          <h3>{task.title}</h3>
          <h4>{task.desc}</h4>
          <button
            onClick={() => {
              deleteHandler(index);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }
  return (
    <div className={`${styles.todobody}`}>
      <div style={{ width: "60%" }}>
        <div className={`${styles.heading}`}>
          <h1>To Do List</h1>
        </div>

        <div className={`${styles.formdiv}`}>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Enter title of todo list"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Enter description here"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button className={`${styles.input_btn}`}>Add Task</button>
          </form>
        </div>

        <div className={`${styles.datadiv}`}>{renderTask}</div>
      </div>
    </div>
  );
};

export default ToDoList;
