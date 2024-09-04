import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FetchComments from "./FetchComments";

export default function MediaCard({ displayData }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <Card sx={{}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {displayData.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setShowComments(!showComments)}>
          Comments
        </Button>
      </CardActions>
      {showComments == true ? <FetchComments postID={displayData.id} /> : null}
      {/* {showComments && <FetchComments postID={displayData.id} />} */}
    </Card>
  );
}
