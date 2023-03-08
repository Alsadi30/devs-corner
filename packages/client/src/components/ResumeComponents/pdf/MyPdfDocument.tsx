import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import Data from "./../../../assets/Data.json";
import BasicIntro from "./components/BasicIntro";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const styles = StyleSheet.create({
  page: {
    margin: "10 0",
    backgroundColor: "white",
    width: "100%",
  },
  section: {
    margin: "10 30",
    marginBottom: 0,
    padding: 10,
  },
  sectionTitle: {
    color: "#336699",
    fontSize: "15",
    fontWeight: "bold",
  },
  sectionChild1: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  sectionChild2: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  sectionChild3: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  innerView: {
    marginBottom: 10,
  },
});

const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <BasicIntro
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
    </Page>
  </Document>
);

export default MyPdfDocument;
