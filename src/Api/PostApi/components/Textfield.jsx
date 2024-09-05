import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ title, setTitle, body, setBody }) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Body"
        variant="outlined"
        type="text"
        placeholder="Enter body..."
        value={body}
        onChange={(e) => {
          console.log(e.target.value);
          setBody(e.target.value);
        }}
      />
    </Box>
  );
}
