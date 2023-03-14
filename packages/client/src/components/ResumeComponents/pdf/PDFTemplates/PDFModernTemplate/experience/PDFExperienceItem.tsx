import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { SectionContainerH } from "../../PDFBasicTemplate/components/PDFSectionContainer";

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
type jobPropsType = {
  position: string;
  companyName: string;
  startAt: string;
  endAt: string;
};
const ExperienceItem = ({
  position,
  companyName,
  startAt,
  endAt,
}: jobPropsType) => {
  return (
    <View>
      <SectionContainerH>
        <Text style={styles.sectionChild1}>{`* ${position}, `}</Text>
        <Text style={styles.sectionChild2}>{`${companyName} ,`}</Text>
        <Text style={styles.sectionChild3}>{`${startAt} to ${
          endAt != null ? endAt : "Present"
        }`}</Text>
      </SectionContainerH>
    </View>
  );
};
export default ExperienceItem;
