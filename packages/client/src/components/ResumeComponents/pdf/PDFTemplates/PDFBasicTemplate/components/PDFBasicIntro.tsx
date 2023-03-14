
import { StyleSheet, Text } from "@react-pdf/renderer";
import SectionWrapper from "./PDFSectionWrapper";


const styles = (color: string) =>
  StyleSheet.create({
    Name: {
      color: color,
      fontSize: "25px",
    },
    Position: {
      margin: "3 0",
      color: "gray",
      fontSize: "20px",
    },
    About: {
      color: "black",
      fontSize: "14px",
    },
  });

const BasicIntro = (props: any) => {
  const MainColor = props.MainColor;
  return (
    <SectionWrapper>
      <Text style={styles(MainColor).Name}>{props.Name}</Text>
      <Text style={styles(MainColor).Position}>{props.Position}</Text>
      <Text style={styles(MainColor).About}>{props.About}</Text>
    </SectionWrapper>
  );
};

export default BasicIntro;
