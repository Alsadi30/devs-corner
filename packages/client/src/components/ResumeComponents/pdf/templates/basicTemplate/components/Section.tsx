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
  const TitleColor = props.MainColor;
  return (
    <SectionWrapper>
      <Text style={styles(TitleColor).sectionTitle}>{props.Title}</Text>
      {props.children}
    </SectionWrapper>
  );
};
export default Section;
