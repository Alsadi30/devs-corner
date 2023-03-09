import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  SectionContainerH: {
    marginLeft: "10",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  SectionContainerV: {
    marginLeft: "10",
    display: "flex",
    flexDirection: "column",
  },
});

export const SectionContainerH = (props: any) => {
  return <View style={styles.SectionContainerH}>{props.children}</View>;
};

export const SectionContainerV = (props: any) => {
  return <View style={styles.SectionContainerV}>{props.children}</View>;
};
