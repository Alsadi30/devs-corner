import { Box, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FocusEvent, useMemo, useState } from "react";
import printDownload from "./../../assets/printDownload.jpg";
import Layout from "./../Layout";
import MySelectedTemplate from "./templates/MySelectedTemplate";
import ColorItem from "./templates/sharedComponents/ColorItem";
import Templates from "./templates/sharedComponents/Templates";
const style = {
  pageWrapper: {
    width: "800px",
    // background: 'white',
    // height: "1800px",
  },
};

const Resume = () => {
  const [primaryColor, setPrimaryColor] = useState("#2200CC");
  const [secondaryColor, setSecondaryColor] = useState("#336699");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [SelectedTemplate, setSelectedTemplate] = useState("2");

  localStorage.setItem("TitleColor", secondaryColor);
  localStorage.setItem("TextColor", textColor);
  localStorage.setItem("BGColor", backgroundColor);

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
    <Layout>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item>
          <Templates SelectedTemplate={setSelectedTemplate} />
        </Grid>
        <ThemeProvider theme={theme}>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: backgroundColor }}
          >
            <Box sx={style.pageWrapper}>
              <ThemeProvider theme={theme}>
                <MySelectedTemplate SelectedTemplate={SelectedTemplate} />
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item>
            <center>
              <Typography variant="h3">Choose Color</Typography>
            </center>
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
            <center>
              <a href="resume/pdf">
                <img src={printDownload} width="150px" alt="Print & Download" />
              </a>
            </center>
          </Grid>
        </ThemeProvider>
      </Grid>
    </Layout>
  );
};
export default Resume;
