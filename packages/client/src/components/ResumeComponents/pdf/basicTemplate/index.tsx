import Data from "./../../../../../assets/Data.json";
import BasicIntro from "./BasicIntro";
import Contact from "./contact/Contact";
import Credentials from "./credential/Credentials";
import Education from "./education/Education";
import Experience from "./experience//Experience";
import Projects from "./projects/Projects";
import Skills from "./skill/Skills";

const BasicPdfTemplate = ({ MainColor }: any) => {
  return (
    <>
      <BasicIntro
        MainColor={MainColor}
        Name={Data.profile.displayname}
        Position={Data.profile.bio}
        About={Data.profile.about}
      />
      <Contact
        email={Data.email}
        phone={Data.phone}
        location={Data.profile.location}
        linkedin="linkedin/in/jiop"
      />
      <Skills SkillList={Data.skills} />
      <Experience Experience={Data.experience} />
      <Education Education={Data.education} />
      <Projects Projects={Data.projects} />
      <Credentials Credentials={Data.credentials} />
    </>
  );
};
export default BasicPdfTemplate;
