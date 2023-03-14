import { useSelector } from "react-redux";
// import staticData from "../../../assets/Data.json";
import { useGetUserQuery } from "../../../features/user/userApi";
import BasicTemplate from "./basicTemplate/BasicTemplate";
import ModernTemplate from "./modernTemplate/index";
import StylishTemplate from "./stylishTemplate/index";

const MySelectedTemplate = ({ SelectedTemplate }: any) => {
  const auth = useSelector((state: any) => state?.auth);
  const { data: userData, isError, isLoading } = useGetUserQuery(auth.user.id);
  const dynamicData = userData[0];
  // console.log(dynamicData);
  // console.log(Data);
  localStorage.setItem("dynamicData", dynamicData);

  // const Data = dynamicData;
  // console.log(Data);
  if (SelectedTemplate == "1") {
    return <BasicTemplate Data={dynamicData} />;
  } else if (SelectedTemplate == "2") {
    return <ModernTemplate Data={dynamicData} />;
  } else if (SelectedTemplate == "3") {
    return <StylishTemplate Data={dynamicData} />;
  } else {
    return null;
  }
};
export default MySelectedTemplate;
