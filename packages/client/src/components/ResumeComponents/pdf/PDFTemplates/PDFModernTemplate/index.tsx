import { View } from "@react-pdf/renderer";
import Summary from "../sharedComponents/PDFSummary";
import Data from "./../../../../../assets/Data.json";
import BasicIntro from "./components/PDFBasicIntro";
import Credentials from "./Credential/PDFCredentials";
import Education from "./education/PDFEducation";
import Experience from "./experience/PDFExperience";
import Projects from "./projects/PDFProjects";
import Skills from "./skill/PDFSkills";

const PDFBasicTemplate = ({ MainColor }: any) => {
  return (
    <View>
      <BasicIntro
        Name={Data.profile.displayname}
        Position={Data.profile.bio}
        Email={Data.email}
        Phone={Data.phone}
        Location={Data.profile.location}
        Linkedin="arif.btkrm"
        MainColor={MainColor}
      />
      <Summary About={Data.profile.about} MainColor={MainColor} />
      <Skills SkillList={Data.skills} MainColor={MainColor} />
      <Experience Experience={Data.experience} MainColor={MainColor} />
      <Education Education={Data.education} MainColor={MainColor} />
      <Credentials Credentials={Data.credentials} MainColor={MainColor} />
      <Projects Projects={Data.projects} MainColor={MainColor} />
    </View>
  );
};
export default PDFBasicTemplate;
