import { StyleSheet, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  SkillItem: {
    padding: "5",
    margin: "4",
    borderRadius: "5",
    backgroundColor: "#336699",
    fontSize: "12px",
    color: "white",
  },
});
// type skillType = { id: string; name: string; thumbnail: string };
const SkillItem = ({ children }: any) => {
  return <Text style={styles.SkillItem}>{children}</Text>;
};
export default SkillItem;
