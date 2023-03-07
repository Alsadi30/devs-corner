import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  SectionContainer: {
    marginLeft: "10",
  },
});

const SectionContainer = (props: any) => {
  return <View style={styles.SectionContainer}>{props.children}</View>;
};

export default SectionContainer;
