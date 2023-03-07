import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Section from "./Section";

const styles = StyleSheet.create({
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

const Experience = () => {
  return (
    <Section>
      <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.sectionChild1}>-- Software Engineer (MERN)</Text>
        <Text style={styles.sectionChild2}> , BrainStation 23</Text>
        <Text style={styles.sectionChild3}> , 2020-2023</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.sectionChild1}>-- Software Engineer</Text>
        <Text style={styles.sectionChild2}> , AdovaSoft</Text>
        <Text style={styles.sectionChild3}> , 2018-2020</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.sectionChild1}>-- Javascript Programmer</Text>
        <Text style={styles.sectionChild2}> , fiver</Text>
        <Text style={styles.sectionChild3}> , 2015-2018</Text>
      </View>
    </Section>
  );
};

export default Experience;
