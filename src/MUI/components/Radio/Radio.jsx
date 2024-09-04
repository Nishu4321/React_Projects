import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

//Direction
// To lay out the buttons horizontally, set the row prop:
// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// export default function RowRadioButtonsGroup() {
//   return (
//     <FormControl>
//       <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
//       <RadioGroup
//         row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         name="row-radio-buttons-group"
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//         <FormControlLabel
//           value="disabled"
//           disabled
//           control={<Radio />}
//           label="other"
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// }

// Controlled
// You can control the radio with the value and onChange props:
// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// export default function ControlledRadioButtonsGroup() {
//   const [value, setValue] = React.useState("female");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl>
//       <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//       </RadioGroup>
//     </FormControl>
//   );
// }

// Standalone radio buttons
// Radio can also be used standalone, without the RadioGroup wrapper.
// import * as React from "react";
// import Radio from "@mui/material/Radio";

// export default function RadioButtons() {
//   const [selectedValue, setSelectedValue] = React.useState("a");

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <Radio
//         checked={selectedValue === "a"}
//         onChange={handleChange}
//         value="a"
//         name="radio-buttons"
//         inputProps={{ "aria-label": "A" }}
//       />
//       <Radio
//         checked={selectedValue === "b"}
//         onChange={handleChange}
//         value="b"
//         name="radio-buttons"
//         inputProps={{ "aria-label": "B" }}
//       />
//     </div>
//   );
// }

// Show error
// In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:
// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormLabel from "@mui/material/FormLabel";
// import Button from "@mui/material/Button";

// export default function ErrorRadios() {
//   const [value, setValue] = React.useState("");
//   const [error, setError] = React.useState(false);
//   const [helperText, setHelperText] = React.useState("Choose wisely");

//   const handleRadioChange = (event) => {
//     setValue(event.target.value);
//     setHelperText(" ");
//     setError(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (value === "best") {
//       setHelperText("You got it!");
//       setError(false);
//     } else if (value === "worst") {
//       setHelperText("Sorry, wrong answer!");
//       setError(true);
//     } else {
//       setHelperText("Please select an option.");
//       setError(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormControl sx={{ m: 3 }} error={error} variant="standard">
//         <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-error-radios"
//           name="quiz"
//           value={value}
//           onChange={handleRadioChange}
//         >
//           <FormControlLabel
//             value="best"
//             control={<Radio />}
//             label="The best!"
//           />
//           <FormControlLabel
//             value="worst"
//             control={<Radio />}
//             label="The worst."
//           />
//         </RadioGroup>
//         <FormHelperText>{helperText}</FormHelperText>
//         <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
//           Check Answer
//         </Button>
//       </FormControl>
//     </form>
//   );
// }
