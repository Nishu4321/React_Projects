import React, { useState } from "react";
import styles from "./ToDoList.module.css";

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

  let renderTask = <h3>No task available</h3>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return <Task index={index} task={task} />;
    });
  }

  function Task({ task, index }) {
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDesc, setEditDesc] = useState(task.desc);
    const [editMode, setEditMode] = useState(false);

    const editTask = () => {
      setEditMode(true);
    };

    const deleteHandler = (index) => {
      console.log(index);
      let copytask = [...mainTask];
      copytask.splice(index, 1);
      setMainTask(copytask);
    };

    const editHandler = (e) => {
      e.preventDefault();
      if (editTitle.length > 0 && editDesc.length > 0) {
        let tempTask = [...mainTask];
        tempTask[index] = { title: editTitle, desc: editDesc };
        setMainTask(tempTask);
      } else {
        alert("Task can't be empty");
      }
    };

    return (
      <div key={index} className={`${styles.data}`}>
        <div className={`${styles.input_data}`}>
          <form onSubmit={editHandler}>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Enter title of todo list"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
              disabled={!editMode}
            />

            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Enter description here"
              value={editDesc}
              onChange={(e) => {
                setEditDesc(e.target.value);
              }}
              disabled={!editMode}
            />
            {editMode ? (
              <button className={`${styles.input_btn}`}>Save Task</button>
            ) : null}
          </form>
          {editMode == false ? (
            <>
              <button
                onClick={() => {
                  console.log("clicked");
                  editTask();
                }}
              >
                Edit Task
              </button>
              <button
                onClick={() => {
                  console.log("clicked");
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </>
          ) : null}
        </div>
      </div>
    );
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
