import { Grid } from "@mui/material";
import { FocusEvent } from "react";

interface Props {
  handleCapture: (e: FocusEvent<HTMLInputElement, Element>) => void;
  defaultValue: string;
  title: string;
}

const ColorItem = ({ title, defaultValue, handleCapture }: Props) => {
  return (
    <Grid container justifyContent={"space-between"}>
      <label htmlFor="colorpicker" style={{ color: "white", padding: "20px" }}>
        {title}:
      </label>
      <input
        onChangeCapture={handleCapture}
        defaultValue={defaultValue}
        style={{ margin: "20px 0px" }}
        type="color"
        id="colorpicker"
      ></input>
    </Grid>
  );
};

export default ColorItem;
