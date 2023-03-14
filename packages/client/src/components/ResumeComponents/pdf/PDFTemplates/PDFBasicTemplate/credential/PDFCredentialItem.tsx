import pdf from "@react-pdf/renderer";
const { StyleSheet, View, Text } = pdf;

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
type crsPropsType = {
  title: string;
  institution: string;
  courseDuration: string;
  achivedAt: string;
};
const CredentialItem = ({
  title,
  institution,
  courseDuration,
  achivedAt,
}: crsPropsType) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.sectionChild1}>{`-> ${title}, `}</Text>
        <Text style={styles.sectionChild2}>{`${institution}, `}</Text>
        <Text style={styles.sectionChild3}>{`${courseDuration}, `}</Text>
        <Text style={styles.sectionChild3}>{achivedAt}</Text>
      </View>
    </View>
  );
};
export default CredentialItem;
