import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  sectionChild1: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  sectionChild2: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  sectionChild3: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  innerView: {
    marginBottom: 10,
  },
});

type EducationItemType = {
  id: string;
  title: string;
  result: string;
  passingyear: string;
  institute: string;
};

const EducationItem = ({ EduItem }: any) => {
  // console.log(EduItem);
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.sectionChild1}>{EduItem.title}</Text>
        <Text style={styles.sectionChild2}>{EduItem.institute}</Text>
        <Text style={styles.sectionChild3}>{`CGPA : ${EduItem.result}`}</Text>
        <Text
          style={styles.sectionChild3}
        >{`Passing Year : ${EduItem.passingyear}`}</Text>
      </View>
    </View>
  );
};
export default EducationItem;
