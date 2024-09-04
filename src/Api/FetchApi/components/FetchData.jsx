import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { Divider } from "@mui/material";

const FetchData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  }, []);

  return (
    <div>
      {datas.map((data) => (
        <div key={data.id}>
          {/* <p>titles: {data.title}</p>
          <p>body: {data.body}</p> */}
          <MediaCard displayData={data} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default FetchData;
