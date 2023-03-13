import { StyleSheet, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  TextFont: {
    backgroundColor: "white",
  },
});
const MyText = ({ children }: any) => {
  return <Text style={{}}>{children}</Text>;
};

export default MyText;
