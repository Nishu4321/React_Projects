import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons({ submitHandler }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={submitHandler}>
        Post
      </Button>
    </Stack>
  );
}
