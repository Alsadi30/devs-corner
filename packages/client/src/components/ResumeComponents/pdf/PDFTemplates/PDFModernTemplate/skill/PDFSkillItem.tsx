import { StyleSheet, Text } from "@react-pdf/renderer";
const styles = (MainColor: string) =>
  StyleSheet.create({
    SkillItem: {
      textAlign: "center",
      fontSize: "15px",
      padding: "5px",
      margin: "3px",
      color: "black",
      border: "2px",
      borderStyle: "solid",
      borderColor: MainColor,
      borderRadius: "10px",
    },
  });
// type skillType = { id: string; name: string; thumbnail: string };
const SkillItem = ({ children, MainColor }: any) => {
  return <Text style={styles(MainColor).SkillItem}>{children}</Text>;
};
export default SkillItem;
