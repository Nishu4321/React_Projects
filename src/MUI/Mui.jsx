import React from "react";
import styles from "./Mui.module.css";
import ComboBox from "./components/AutoComplete/Autocomplete";
import TextButtons from "./components/Buttons/TextButton";
import ContainedButtons from "./components/Buttons/ContainedButton";
import OutlinedButtons from "./components/Buttons/OutlineButton";
import ColorButtons from "./components/Buttons/ColorButton";
import IconLabelButtons from "./components/Buttons/IconLabelButtons";
import IconButtons from "./components/Buttons/IconButtons";
import InputFileUpload from "./components/Buttons/InputFileUpload";
import ButtonBaseDemo from "./components/Buttons/ImageButton";
import LoadingButtons from "./components/Buttons/LoadingButtons";
import LoadingButtonsTransition from "./components/Buttons/LoadingButtonsTransition";
import BasicButtonGroup from "./components/ButtonGroup/BasicButtonGroup";
import GroupSizesColors from "./components/ButtonGroup/GroupSizesColors";
import GroupOrientation from "./components/ButtonGroup/VerticalButton";
import CheckboxLabels from "./components/CheckBox/CheckboxLabels";
import FloatingActionButtons from "./components/FloatingActionButton/FloatingActionButton";
import ToggleButtons from "./components/ToggleButton/ToggleButton";
import RadioButtonsGroup from "./components/Radio/Radio";
import BasicRating from "./components/Ratings/BasicRating";
import BasicSelect from "./components/Select/Select";
import BasicTextFields from "./components/TextField/TextField";

const Mui = () => {
  return (
    <>
      <div className={`${styles.main_div}`}>
        <ComboBox />

        <TextButtons />
        <ContainedButtons />
        <OutlinedButtons />
        <ColorButtons />
        <IconLabelButtons />
        <IconButtons />
        <InputFileUpload />
        <ButtonBaseDemo />
        <LoadingButtons />
        <LoadingButtonsTransition />

        {/* Button Group */}
        <BasicButtonGroup />
        <GroupSizesColors />
        <GroupOrientation />

        {/* checkBox */}
        <CheckboxLabels />

        <FloatingActionButtons />
        <ToggleButtons />
        <RadioButtonsGroup />
        <BasicRating />
        <BasicSelect />
        <BasicTextFields />
      </div>
    </>
  );
};

export default Mui;
