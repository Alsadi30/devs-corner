import Data from "./../../../../../assets/Data.json";
import BasicIntro from "./components/BasicIntro";
import Contact from "./contact/Contact";
import Credentials from "./credential/Credentials";
import Education from "./education/Education";
import Experience from "./experience//Experience";
import Projects from "./projects/Projects";
import Skills from "./skill/Skills";

const BasicPDFTemplate = ({ MainColor }: any) => {
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
export default BasicPDFTemplate;
