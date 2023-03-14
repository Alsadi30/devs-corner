import { Grid } from "@mui/material";
import { FocusEvent } from "react";

interface Props {
  handleCapture: (e: FocusEvent<HTMLInputElement, Element>) => void;
  defaultValue: string;
  title: string;
}

const ColorItem = ({ title, defaultValue, handleCapture }: Props) => {
  return (
    <Grid container>
      <label
        htmlFor="colorpicker"
        style={{ color: "white", paddingLeft: "50px", marginTop: "20px" }}
      >
        {title}:
      </label>
      <input
        onChangeCapture={handleCapture}
        defaultValue={defaultValue}
        style={{
          width: "100%",
          marginLeft: "30px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
        type="color"
        id="colorpicker"
      />
    </Grid>
  );
};

export default ColorItem;
