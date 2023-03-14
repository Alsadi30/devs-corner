import PDFBasicTemplate from "./PDFBasicTemplate";
import PDFModernTemplate from "./PDFModernTemplate/index";
// import StylishTemplate from "./stylishTemplate/index";

const MainColor = localStorage.getItem("TitleColor");
console.log(MainColor);
const SelectedPDFTemplate = ({ SelectedTemplate }: any) => {
  if (SelectedTemplate == "1") {
    return <PDFBasicTemplate MainColor={MainColor} />;
  } else if (SelectedTemplate == "2") {
    return <PDFModernTemplate MainColor={MainColor} />;
  } else if (SelectedTemplate == "3") {
    return <PDFBasicTemplate MainColor={MainColor} />;
  } else {
    return null;
  }
};
export default SelectedPDFTemplate;
