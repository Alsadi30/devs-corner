import { createTheme } from "@mui/material/styles";
import { FocusEvent, useMemo, useState } from "react";
import ColorItem from "./ColorItem";
const ControlPanel = () => {
  const [primaryColor, setPrimaryColor] = useState("#2200CC");
  const [secondaryColor, setSecondaryColor] = useState("#336699");
  const [textColor, setTextColor] = useState("#000000");

  localStorage.setItem("TitleColor", secondaryColor);
  localStorage.setItem("TextColor", textColor);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: primaryColor },
          secondary: { main: secondaryColor },
          info: { main: textColor },
        },
        typography: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          h1: {
            fontSize: "2rem",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.01562em",
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em",
          },
          h3: {
            fontSize: "1.4rem",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "#ffffff",
            letterSpacing: "0em",
          },
          h4: {
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "0.00735em",
          },
          h5: {
            fontSize: "1.2rem",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "0em",
          },
          h6: {
            fontSize: "1rem",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "0.0075em",
          },
        },
      }),
    [primaryColor, secondaryColor, textColor]
  );

  const handleSecondary = (e: FocusEvent<HTMLInputElement, Element>) => {
    setSecondaryColor(e.target.value);
  };

  const handleText = (e: FocusEvent<HTMLInputElement, Element>) => {
    setTextColor(e.target.value);
  };

  return (
    <div>
      <ColorItem
        title="Title Color"
        handleCapture={handleSecondary}
        defaultValue={secondaryColor}
      />
      <ColorItem
        title="Text Color"
        handleCapture={handleText}
        defaultValue={textColor}
      />
    </div>
  );
};
export default ControlPanel;
