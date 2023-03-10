import { StyleSheet, Text } from "@react-pdf/renderer";
const styles = (MainColor: string) =>
  StyleSheet.create({
    SkillItem: {
      padding: "5",
      margin: "4",
      borderRadius: "5",
      backgroundColor: MainColor,
      fontSize: "12px",
      color: "white",
    },
  });
// type skillType = { id: string; name: string; thumbnail: string };
const SkillItem = ({ children, MainColor }: any) => {
  return <Text style={styles(MainColor).SkillItem}>{children}</Text>;
};
export default SkillItem;
