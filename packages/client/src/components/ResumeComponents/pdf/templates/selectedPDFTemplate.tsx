import BasicPDFTemplate from "./basicTemplate";
import ModernPDFTemplate from "./modernTemplate/index";
// import StylishTemplate from "./stylishTemplate/index";

const MainColor = localStorage.getItem("TitleColor");

const SelectedPDFTemplate = ({ SelectedTemplate }: any) => {
  if (SelectedTemplate == "1") {
    return <BasicPDFTemplate MainColor={MainColor} />;
  } else if (SelectedTemplate == "2") {
    return <ModernPDFTemplate MainColor={MainColor} />;
  } else if (SelectedTemplate == "3") {
    return <BasicTemplate MainColor="#699146" />;
  } else {
    return null;
  }
};
export default SelectedPDFTemplate;
