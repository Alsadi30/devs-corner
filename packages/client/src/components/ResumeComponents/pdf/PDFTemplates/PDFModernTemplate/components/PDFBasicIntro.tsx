import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = (color: string) =>
  StyleSheet.create({
    Name: {
      color: "white",
      fontSize: "40px",
    },
    Position: {
      margin: "3 0",
      fontSize: "20px",
      color: "white",
    },
    About: {
      color: "black",
      fontSize: "14px",
    },
    ContactItem: {
      fontSize: "15px",
    },
    Wrapper: {
      backgroundColor: color,
      padding: "20px 40px",
    },
    ContactWrapper: {
      color: "white",
      margin: "20px 0",
    },
  });

const BasicIntro = (props: any) => {
  const MainColor = props.MainColor;
  return (
    <View style={styles(MainColor).Wrapper}>
      <View style={styles(MainColor).ContactWrapper}>
        <Text style={styles(MainColor).ContactItem}>{props.Phone}</Text>
        <Text style={styles(MainColor).ContactItem}>{props.Email}</Text>
        <Text style={styles(MainColor).ContactItem}>{props.Location}</Text>
        <Text style={styles(MainColor).ContactItem}>{props.Linkedin}</Text>
      </View>
      <Text style={styles(MainColor).Name}>{props.Name}</Text>
      <Text style={styles(MainColor).Position}>{props.Position}</Text>
    </View>
  );
};

export default BasicIntro;
