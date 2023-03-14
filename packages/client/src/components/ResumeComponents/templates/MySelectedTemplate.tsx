import BasicTemplate from "./basicTemplate/BasicTemplate";
import ModernTemplate from "./modernTemplate/index";
import StylishTemplate from "./stylishTemplate/index";

const MySelectedTemplate = ({ SelectedTemplate }: any) => {
  if (SelectedTemplate == "1") {
    return <BasicTemplate />;
  } else if (SelectedTemplate == "2") {
    return <ModernTemplate />;
  } else if (SelectedTemplate == "3") {
    return <StylishTemplate />;
  } else {
    return null;
  }
};
export default MySelectedTemplate;
