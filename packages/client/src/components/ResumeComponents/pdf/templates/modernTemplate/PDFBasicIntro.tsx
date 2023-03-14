import { Text, View } from "@react-pdf/renderer";

const PDFBasicIntro = ({
  Name,
  Position,
  Email,
  Phone,
  Location,
  Linkedin,
}: any) => {
  return (
    <View style={{ backgroundColor: "secondary.main", padding: "20px 40px" }}>
      <View style={{ color: "white", margin: "30px 0" }}>
        <Text>{Phone}</Text>
        <Text>{Email}</Text>
        <Text>{Location}</Text>
        <Text>{Linkedin}</Text>
      </View>
      <Text style={{ color: "white", fontSize: "50px" }}>{Name}</Text>
      <Text style={{ color: "white", marginRight: "50px" }}>{Position}</Text>
    </View>
  );
};
export default PDFBasicIntro;
