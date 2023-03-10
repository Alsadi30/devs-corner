import { StyleSheet, Text } from "@react-pdf/renderer";
import SectionWrapper from "./SectionWrapper";

const styles = (MainColor: string) =>
  StyleSheet.create({
    sectionTitle: {
      color: MainColor,
      fontSize: "15",
      fontWeight: "bold",
    },
  });
const Section = (props: any) => {
  var MainColor = "#336699";
  return (
    <SectionWrapper>
      <Text style={styles(MainColor).sectionTitle}>{props.Title}</Text>
      {props.children}
    </SectionWrapper>
  );
};
export default Section;
