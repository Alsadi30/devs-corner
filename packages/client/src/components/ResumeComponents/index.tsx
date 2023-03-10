import { Box, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FocusEvent, useMemo, useState } from "react";
import Layout from "../Layout";
import Data from "./../../assets/Data.json";
import {
  BasicIntro,
  Contact,
  Credentials,
  Education,
  Projects,
  Skill,
  WorkExperience,
} from "./BasicTemplateComponents";
import ColorItem from "./ColorItem";

const style = {
  pageWrapper: {
    padding: "20px 0",
    width: "800px",
    // background: 'white',
    // height: "1800px",
  },
};

const BasicTemplate = () => {
  const [primaryColor, setPrimaryColor] = useState("#f44336");
  const [secondaryColor, setSecondaryColor] = useState("#336699");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

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
      <Grid container display={"flex"}>
        <Grid item>
          <Typography variant="h3">Templates</Typography>
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
        </Grid>
        <ThemeProvider theme={theme}>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: backgroundColor }}
          >
            <Box sx={style.pageWrapper}>
              <BasicIntro
                Name={Data.profile.displayname}
                Position={Data.profile.bio}
                About={Data.profile.about}
              />
              <Contact
                Email={Data.email}
                Phone={Data.phone}
                Location={Data.profile.location}
                Linkedin="arifbtkrm"
              />
              <Skill skills={Data.skills} />
              {Data.experience.length > 0 ? (
                <WorkExperience experience={Data.experience} />
              ) : (
                ""
              )}
              <Education Education={Data.education} />
              <Projects Projects={Data.projects} />
              <Credentials Credentials={Data.credentials} />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Choose Color</Typography>
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
          </Grid>
        </ThemeProvider>
      </Grid>
    </Layout>
  );
};
export default BasicTemplate;
