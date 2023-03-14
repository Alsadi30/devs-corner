import pdf from "@react-pdf/renderer";
const { Image, StyleSheet, Text, View } = pdf;
const styles = StyleSheet.create({
  ContLogo: {
    width: "15px",
    color: "red",
    margin: "3px",
  },
  ContItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ContItem = ({ Logo, Title }: any) => {
  return (
    <View style={styles.ContItem}>
      <Image style={styles.ContLogo} src={Logo} />
      <Text>{Title}</Text>
    </View>
  );
};

export default ContItem;
