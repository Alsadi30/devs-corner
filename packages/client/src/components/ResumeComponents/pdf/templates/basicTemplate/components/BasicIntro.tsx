import pdf from "@react-pdf/renderer";
const { StyleSheet, Text } = pdf;
import SectionWrapper from "./SectionWrapper";

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
