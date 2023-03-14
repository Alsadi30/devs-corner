import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  SectionWrapper: {
    margin: "10 30",
    marginBottom: 0,
    padding: 10,
  },
});

const SectionWrapper = (props: any) => {
  return <View style={styles.SectionWrapper}>{props.children}</View>;
};

export default SectionWrapper;
