// import React, { useState } from "react";

const PutRequest = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "nishanth",
      body: "nish",
      userId: 121,
    }),
    headers: {
      "Content-type": "application/json; charser=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <div></div>
    </>
  );
};

export default PutRequest;
