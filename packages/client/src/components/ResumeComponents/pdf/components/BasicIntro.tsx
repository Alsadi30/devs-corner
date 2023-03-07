import { StyleSheet, Text } from "@react-pdf/renderer";
import SectionWrapper from "./SectionWrapper";

const styles = (color) =>
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

const BasicIntro = (props) => {
  var MainColor = "#336699";
  return (
    <SectionWrapper>
      <Text style={styles(MainColor).Name}>{props.Name}</Text>
      <Text style={styles.Position}>{props.Position}</Text>
      <Text style={styles.About}>{props.About}</Text>
    </SectionWrapper>
  );
};

export default BasicIntro;
