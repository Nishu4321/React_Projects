import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

// Form props
// Standard form attributes are supported, for example required, disabled, type, etc. as well as a helperText which is used to give context about a field's input, such as how the input will be used.
// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function FormPropsTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="Hello World"
//         />
//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           slotProps={{
//             input: {
//               readOnly: true,
//             },
//           }}
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           slotProps={{
//             inputLabel: {
//               shrink: true,
//             },
//           }}
//         />
//         <TextField id="outlined-search" label="Search field" type="search" />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="filled-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           disabled
//           id="filled-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           id="filled-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           variant="filled"
//           slotProps={{
//             input: {
//               readOnly: true,
//             },
//           }}
//         />
//         <TextField
//           id="filled-number"
//           label="Number"
//           type="number"
//           variant="filled"
//           slotProps={{
//             inputLabel: {
//               shrink: true,
//             },
//           }}
//         />
//         <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//         />
//         <TextField
//           id="filled-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="standard-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           disabled
//           id="standard-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />
//         <TextField
//           id="standard-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           variant="standard"
//           slotProps={{
//             input: {
//               readOnly: true,
//             },
//           }}
//         />
//         <TextField
//           id="standard-number"
//           label="Number"
//           type="number"
//           variant="standard"
//           slotProps={{
//             inputLabel: {
//               shrink: true,
//             },
//           }}
//         />
//         <TextField
//           id="standard-search"
//           label="Search field"
//           type="search"
//           variant="standard"
//         />
//         <TextField
//           id="standard-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }

//Validation
// The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error.
// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function ValidationTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           error
//           id="outlined-error"
//           label="Error"
//           defaultValue="Hello World"
//         />
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="filled-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           error
//           id="filled-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="standard-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           error
//           id="standard-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }

// Multiline
//Select
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// export default function SelectTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-select-currency"
//           select
//           label="Select"
//           defaultValue="EUR"
//           helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           label="Native select"
//           defaultValue="EUR"
//           slotProps={{
//             select: {
//               native: true,
//             },
//           }}
//           helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="filled-select-currency"
//           select
//           label="Select"
//           defaultValue="EUR"
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="filled-select-currency-native"
//           select
//           label="Native select"
//           defaultValue="EUR"
//           slotProps={{
//             select: {
//               native: true,
//             },
//           }}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           defaultValue="EUR"
//           helperText="Please select your currency"
//           variant="standard"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="standard-select-currency-native"
//           select
//           label="Native select"
//           defaultValue="EUR"
//           slotProps={{
//             select: {
//               native: true,
//             },
//           }}
//           helperText="Please select your currency"
//           variant="standard"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//     </Box>
//   );
// }

// Icons
// There are multiple ways to display an icon with a text field.

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// export default function InputWithIcon() {
//   return (
//     <Box sx={{ "& > :not(style)": { m: 1 } }}>
//       <FormControl variant="standard">
//         <InputLabel htmlFor="input-with-icon-adornment">
//           With a start adornment
//         </InputLabel>
//         <Input
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//       <TextField
//         id="input-with-icon-textfield"
//         label="TextField"
//         slotProps={{
//           input: {
//             startAdornment: (
//               <InputAdornment position="start">
//                 <AccountCircle />
//               </InputAdornment>
//             ),
//           },
//         }}
//         variant="standard"
//       />
//       <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//         <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="With sx" variant="standard" />
//       </Box>
//     </Box>
//   );
// }
