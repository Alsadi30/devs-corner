import pdf from "@react-pdf/renderer";
const { StyleSheet, Text } = pdf;
const styles = StyleSheet.create({
  TextFont: {
    backgroundColor: "white",
  },
});
const MyText = ({ children }: any) => {
  return <Text style={{}}>{children}</Text>;
};

export default MyText;
