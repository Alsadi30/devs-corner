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
  title: string;
  result: string;
  passingyear: string;
  institute: string;
};

const EducationItem = ({
  title,
  institute,
  result,
  passingyear,
}: EducationItemType) => {
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.sectionChild1}>{title}</Text>
        <Text style={styles.sectionChild2}>{institute}</Text>
        <Text style={styles.sectionChild3}>{`CGPA : ${result}`}</Text>
        <Text
          style={styles.sectionChild3}
        >{`Passing Year : ${passingyear}`}</Text>
      </View>
    </View>
  );
};
export default EducationItem;
