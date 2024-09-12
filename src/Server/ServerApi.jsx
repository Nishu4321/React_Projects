// import AxiosGet from "./components/AxiosGet";
// import AxiosPost from "./components/AxiosPost";
// import AxiosPut from "./components/AxiosPut";
// import AxiosDelete from "./components/AxiosDelete";
import React, { useEffect, useState } from "react";
import styles from "./ServerApi.module.css";
import axios from "axios";

const ServerApi = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  useEffect(() => {
    getTodos();

    return () => {};
  }, []);

  function getTodos() {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res.data);
        setMainTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.length > 0 && desc.length > 0) {
      axios
        .post("http://localhost:3000/todos", {
          title: title,
          description: desc,
        })
        .then((res) => {
          console.log(res.data);
          getTodos();
        });
      setTitle("");
      setDesc("");
    } else {
      alert("please enter the task");
      setTitle("");
      setDesc("");
    }
  };

  function RenderTask() {
    if (mainTask.length > 0) {
      return (
        <>
          {mainTask.map((task, index) => {
            return <Task index={index} task={task} />;
          })}
        </>
      );
    }

    return <h3>No task available</h3>;
  }

  function Task({ task, index }) {
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDesc, setEditDesc] = useState(task.description);
    const [editMode, setEditMode] = useState(false);

    const editTask = () => {
      setEditMode(true);
    };

    const deleteHandler = (index) => {
      axios
        .delete(`http://localhost:3000/todos/${task.id}`)
        .then((res) => {
          console.log(res);
          getTodos();
        })
        .catch((err) => {});
    };

    const editHandler = (e) => {
      e.preventDefault();
      if (editTitle.length > 0 && editDesc.length > 0) {
        axios
          .put(`http://localhost:3000/todos/${task.id}`, {
            title: editTitle,
            description: editDesc,
          })
          .then((res) => {
            console.log(res.data);
            setEditMode(false);
            getTodos();
          });
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

        <div className={`${styles.datadiv}`}>
          <RenderTask />
        </div>
      </div>
    </div>
  );
};

export default ServerApi;
