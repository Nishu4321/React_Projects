import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { Card, CardContent, Divider, Typography } from "@mui/material";

const FetchComments = ({ postID }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);
  return (
    <div>
      {comments.map((comment) => (
        <>
          <div
            key={comment.id}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              // flexDirection: "column",
            }}
          >
            <CommentsCard displayComment={comment} />
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};
function CommentsCard({ displayComment }) {
  return (
    <Card sx={{ maxWidth: "80%", backgroundColor: "#f9f9f9" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayComment.name} {displayComment.email}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {displayComment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FetchComments;
