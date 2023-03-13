import BasicTemplate from "./basicTemplate/BasicTemplate";
import ModernTemplate from "./modernTemplate/index";

const MySelectedTemplate = ({ SelectedTemplate }: any) => {
  if (SelectedTemplate == "1") {
    return <BasicTemplate />;
  } else if (SelectedTemplate == "2") {
    return <ModernTemplate />;
  } else if (SelectedTemplate == "3") {
    return <div>Template-3</div>;
  } else {
    return null;
  }
};
export default MySelectedTemplate;
