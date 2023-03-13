import { Box, Typography } from "@mui/material";
import basicTmplt from "../../../assets/templates/template1.jpg";
import basicTmplt2 from "../../../assets/templates/template2.jpg";
import TemplateThumb from "./TemplateThumbnail";

const Templates = ({ SelectedTemplate }: any) => {
  const TemplateChangeHandler = (event: any) => {
    localStorage.setItem("SelectedTemplate", event.target.value);
    SelectedTemplate(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        color="initial"
        sx={{ textAlign: "center", color: "white" }}
      >
        Select Template
      </Typography>
      <form
        onChange={TemplateChangeHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TemplateThumb val="1" src={basicTmplt} alt="Basic" />
        <TemplateThumb val="2" src={basicTmplt2} alt="Basic2" />
        <TemplateThumb val="3" src={basicTmplt2} alt="Basic3" />
      </form>
    </Box>
  );
};
export default Templates;
