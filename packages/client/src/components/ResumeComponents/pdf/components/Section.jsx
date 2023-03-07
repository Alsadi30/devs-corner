import { StyleSheet, Text } from "@react-pdf/renderer";
import SectionWrapper from "./SectionWrapper";

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#336699",
    fontSize: "15",
    fontWeight: "bold",
  },
});
const Section = (props) => {
  return (
    <SectionWrapper>
      <Text style={styles.sectionTitle}>{props.Title}</Text>
      {props.children}
    </SectionWrapper>
  );
};
export default Section;
