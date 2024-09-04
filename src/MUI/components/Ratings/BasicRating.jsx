import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

// Rating precision
// The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.
// import * as React from "react";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

// export default function HalfRating() {
//   return (
//     <Stack spacing={1}>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//       <Rating
//         name="half-rating-read"
//         defaultValue={2.5}
//         precision={0.5}
//         readOnly
//       />
//     </Stack>
//   );
// }

// Hover feedback
// You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop.
// import * as React from "react";
// import Rating from "@mui/material/Rating";
// import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";

// const labels = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
// }

// export default function HoverRating() {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);

//   return (
//     <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//   );
// }

// Customization
// Here are some examples of customizing the component.
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Typography from "@mui/material/Typography";

// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#ff6d75",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#ff3d47",
//   },
// });

// export default function CustomizedRating() {
//   return (
//     <Box sx={{ "& > legend": { mt: 2 } }}>
//       <Typography component="legend">Custom icon and color</Typography>
//       <StyledRating
//         name="customized-color"
//         defaultValue={2}
//         getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
//         precision={0.5}
//         icon={<FavoriteIcon fontSize="inherit" />}
//         emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
//       />
//       <Typography component="legend">10 stars</Typography>
//       <Rating name="customized-10" defaultValue={2} max={10} />
//     </Box>
//   );
// }

// Radio group
// The rating is implemented with a radio group, set highlightSelectedOnly to restore the natural behavior.
// import * as React from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Rating from "@mui/material/Rating";
// import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
// import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
// import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
// import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
// import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

// const StyledRating = styled(Rating)(({ theme }) => ({
//   "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
//     color: theme.palette.action.disabled,
//   },
// }));

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon color="error" />,
//     label: "Very Dissatisfied",
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon color="error" />,
//     label: "Dissatisfied",
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon color="warning" />,
//     label: "Neutral",
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon color="success" />,
//     label: "Satisfied",
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon color="success" />,
//     label: "Very Satisfied",
//   },
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function RadioGroupRating() {
//   return (
//     <StyledRating
//       name="highlight-selected-only"
//       defaultValue={2}
//       IconContainerComponent={IconContainer}
//       getLabelText={(value) => customIcons[value].label}
//       highlightSelectedOnly
//     />
//   );
// }
