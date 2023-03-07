import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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

const SectionItamH = () => {
  return (
    <View>
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
    </View>
  );
};
export default SectionItamH;
