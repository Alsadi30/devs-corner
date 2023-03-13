import { StyleSheet, View } from "@react-pdf/renderer";

const styles = (MainColor: string) =>
  StyleSheet.create({
    Bar: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      borderTop: "2px",
      borderColor: MainColor,
      borderStyle: "solid",
    },
  });

const HrBar = ({ MainColor }: any) => {
  return <View style={styles(MainColor).Bar}></View>;
};

export default HrBar;
