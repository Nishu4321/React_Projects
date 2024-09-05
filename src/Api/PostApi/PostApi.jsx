import React from "react";
import { useState } from "react";
import BasicTextFields from "./components/Textfield";
import ContainedButtons from "./components/Button";

const PostApi = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postApiData = (title, body) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setTitle("");
        setBody("");
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 0 && body.length > 0) {
      postApiData(title, body);
    } else {
      alert("please enter the task");
      setTitle("");
      setBody("");
    }
  };

  return (
    <div>
      <div>
        <h1>Add Post</h1>
      </div>

      <div>
        <form onSubmit={submitHandler}>
          {/* <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
          /> */}
          <BasicTextFields
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
          />
          {/* <input
            type="text"
            placeholder="Enter body..."
            value={body}
            onChange={(e) => {
              console.log(e.target.value);
              setBody(e.target.value);
            }}
          /> */}

          {/* <button> Post </button> */}
          <ContainedButtons submitHandler={submitHandler} />
        </form>
      </div>
    </div>
  );
};

export default PostApi;
