import { StyleSheet, View } from "@react-pdf/renderer";
import HrBar from "../components/PDFHrBar";
import ContItem from "./PDFContItem";
const styles = StyleSheet.create({
  Contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "12px",
    padding: "5 30",
  },
});

const Contact = (props: any) => {
  const MainColor = props.MainColor;
  const gmailLogo =
    "https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/gmail_ickeaq.png";
  const phoneLogo =
    "https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/iphone_l8sp0u.png";
  const locationLogo =
    "https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/location_iju9sy.png";
  const linkedInLogo =
    "https://res.cloudinary.com/diaerqggk/image/upload/v1677227867/linkedin_aoyp6a.png";
  return (
    <View>
      <HrBar MainColor={MainColor} />
      <View style={styles.Contact}>
        <ContItem Logo={gmailLogo} Title={props.email} />
        <ContItem Logo={phoneLogo} Title={props.phone} />
        <ContItem Logo={locationLogo} Title={props.location} />
        <ContItem Logo={linkedInLogo} Title={props.linkedin} />
      </View>
      <HrBar MainColor={MainColor} />
    </View>
  );
};

export default Contact;
