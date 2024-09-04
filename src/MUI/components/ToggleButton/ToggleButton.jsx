// import * as React from "react";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function ToggleButtons() {
//   const [alignment, setAlignment] = React.useState("left");

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <ToggleButtonGroup
//       value={alignment}
//       exclusive
//       onChange={handleAlignment}
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" aria-label="left aligned">
//         <FormatAlignLeftIcon />
//       </ToggleButton>
//       <ToggleButton value="center" aria-label="centered">
//         <FormatAlignCenterIcon />
//       </ToggleButton>
//       <ToggleButton value="right" aria-label="right aligned">
//         <FormatAlignRightIcon />
//       </ToggleButton>
//       <ToggleButton value="justify" aria-label="justified" disabled>
//         <FormatAlignJustifyIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// Multiple selection
// Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.
// import * as React from "react";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function ToggleButtonsMultiple() {
//   const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   return (
//     <ToggleButtonGroup
//       value={formats}
//       onChange={handleFormat}
//       aria-label="text formatting"
//     >
//       <ToggleButton value="bold" aria-label="bold">
//         <FormatBoldIcon />
//       </ToggleButton>
//       <ToggleButton value="italic" aria-label="italic">
//         <FormatItalicIcon />
//       </ToggleButton>
//       <ToggleButton value="underlined" aria-label="underlined">
//         <FormatUnderlinedIcon />
//       </ToggleButton>
//       <ToggleButton value="color" aria-label="color" disabled>
//         <FormatColorFillIcon />
//         <ArrowDropDownIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// Vertical buttons
// The buttons can be stacked vertically with the orientation prop set to "vertical".
// import * as React from "react";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import ViewModuleIcon from "@mui/icons-material/ViewModule";
// import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function VerticalToggleButtons() {
//   const [view, setView] = React.useState("list");

//   const handleChange = (event, nextView) => {
//     setView(nextView);
//   };

//   return (
//     <ToggleButtonGroup
//       orientation="vertical"
//       value={view}
//       exclusive
//       onChange={handleChange}
//     >
//       <ToggleButton value="list" aria-label="list">
//         <ViewListIcon />
//       </ToggleButton>
//       <ToggleButton value="module" aria-label="module">
//         <ViewModuleIcon />
//       </ToggleButton>
//       <ToggleButton value="quilt" aria-label="quilt">
//         <ViewQuiltIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// Enforce value set
// If you want to enforce that at least one button must be active, you can adapt your handleChange function.
// import * as React from "react";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import LaptopIcon from "@mui/icons-material/Laptop";
// import TvIcon from "@mui/icons-material/Tv";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import Stack from "@mui/material/Stack";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function ToggleButtonNotEmpty() {
//   const [alignment, setAlignment] = React.useState("left");
//   const [devices, setDevices] = React.useState(() => ["phone"]);

//   const handleAlignment = (event, newAlignment) => {
//     if (newAlignment !== null) {
//       setAlignment(newAlignment);
//     }
//   };

//   const handleDevices = (event, newDevices) => {
//     if (newDevices.length) {
//       setDevices(newDevices);
//     }
//   };

//   return (
//     <Stack direction="row" spacing={4}>
//       <ToggleButtonGroup
//         value={alignment}
//         exclusive
//         onChange={handleAlignment}
//         aria-label="text alignment"
//       >
//         <ToggleButton value="left" aria-label="left aligned">
//           <FormatAlignLeftIcon />
//         </ToggleButton>
//         <ToggleButton value="center" aria-label="centered">
//           <FormatAlignCenterIcon />
//         </ToggleButton>
//         <ToggleButton value="right" aria-label="right aligned">
//           <FormatAlignRightIcon />
//         </ToggleButton>
//       </ToggleButtonGroup>

//       <ToggleButtonGroup
//         value={devices}
//         onChange={handleDevices}
//         aria-label="device"
//       >
//         <ToggleButton value="laptop" aria-label="laptop">
//           <LaptopIcon />
//         </ToggleButton>
//         <ToggleButton value="tv" aria-label="tv">
//           <TvIcon />
//         </ToggleButton>
//         <ToggleButton value="phone" aria-label="phone">
//           <PhoneAndroidIcon />
//         </ToggleButton>
//       </ToggleButtonGroup>
//     </Stack>
//   );
// }

// Customization
// Here is an example of customizing the component. You can learn more about this in the overrides documentation page.
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: "flex",
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        })}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
