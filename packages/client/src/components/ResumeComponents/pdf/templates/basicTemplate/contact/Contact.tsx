import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import HrBar from "../HrBar";
const styles = StyleSheet.create({
  Contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "12px",
    padding: "5 30",
  },
  ContLogo: {
    width: "15px",
    color: "red",
    // padding: "1px",
    margin: "3px",
  },
  ContItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Contact = (props: any) => {
  const MainColor = props.MainColor;
  return (
    <View>
      <HrBar MainColor={MainColor} />
      <View style={styles.Contact}>
        <View style={styles.ContItem}>
          <Image
            style={styles.ContLogo}
            src="https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/gmail_ickeaq.png"
          />
          <Text>{props.email}</Text>
        </View>
        <View style={styles.ContItem}>
          <Image
            style={styles.ContLogo}
            src="https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/iphone_l8sp0u.png"
          />
          <Text>{props.phone}</Text>
        </View>
        <View style={styles.ContItem}>
          <Image
            style={styles.ContLogo}
            src="https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/location_iju9sy.png"
          />
          <Text>{props.location}</Text>
        </View>
        <View style={styles.ContItem}>
          <Image
            style={styles.ContLogo}
            src="https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/linkedin_aoyp6a.png"
          />
          <Text>{props.linkedin}</Text>
        </View>
      </View>
      <HrBar MainColor={MainColor} />
    </View>
  );
};

export default Contact;
