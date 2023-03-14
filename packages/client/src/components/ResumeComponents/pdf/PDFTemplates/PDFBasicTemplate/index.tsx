import Data from "./../../../../../assets/Data.json";
import BasicIntro from "./components/PDFBasicIntro";
import Contact from "./contact/PDFContact";
import Credentials from "./credential/PDFCredentials";
import Education from "./education/PDFEducation";
import Experience from "./experience/PDFExperience";
import Projects from "./projects/PDFProjects";
import Skills from "./skill/PDFSkills";

const PDFBasicTemplate = ({ MainColor }: any) => {
  return (
    <>
      <BasicIntro
        Name={Data.profile.displayname}
        Position={Data.profile.bio}
        About={Data.profile.about}
        MainColor={MainColor}
      />
      <Contact
        email={Data.email}
        phone={Data.phone}
        location={Data.profile.location}
        linkedin="linkedin/in/jiop"
        MainColor={MainColor}
      />
      <Skills SkillList={Data.skills} MainColor={MainColor} />
      <Experience Experience={Data.experience} MainColor={MainColor} />
      <Education Education={Data.education} MainColor={MainColor} />
      <Projects Projects={Data.projects} MainColor={MainColor} />
      <Credentials Credentials={Data.credentials} MainColor={MainColor} />
    </>
  );
};
export default PDFBasicTemplate;
