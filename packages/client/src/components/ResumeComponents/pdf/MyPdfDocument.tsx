import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import Data from "./../../../assets/Data.json";
import BasicIntro from "./components/BasicIntro";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EADUCATION</Text>
        <View>
          <Text style={styles.sectionChild1}>
            Computer Science and Engineering (CSE)
          </Text>
          <Text style={styles.sectionChild2}>
            Bangladesh University of Engineering and Technology (BUET)
          </Text>
          <Text style={styles.sectionChild3}>2020-2024</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        <View style={styles.innerView}>
          <Text style={styles.sectionChild1}>{`Name : Covid Items`} </Text>
          <Text
            style={styles.sectionChild2}
          >{`Description : This Project is about Covid Item Store Where people can get their life saving items easily`}</Text>
          <Text
            style={styles.sectionChild3}
          >{`RepoUrl : https://www.github.com/arif/covidItems`}</Text>
          <Text
            style={styles.sectionChild3}
          >{`LiveUrl : https://www.google.com`}</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.sectionChild1}>{`Name : Watch Store`} </Text>
          <Text
            style={styles.sectionChild2}
          >{`Description : It is an e-commerce Project. which is based on wrist watch. there are a lot of fuctionality of filtering`}</Text>
          <Text
            style={styles.sectionChild3}
          >{`RepoUrl : https://www.github.com/arif/covidItems`}</Text>
          <Text
            style={styles.sectionChild3}
          >{`LiveUrl : https://www.google.com`}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyPdfDocument;
