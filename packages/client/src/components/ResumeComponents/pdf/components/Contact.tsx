import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  Contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTop: "1 solid black",
    borderBottom: "1 solid black",
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

const Contact = (props) => {
  return (
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
  );
};

export default Contact;
