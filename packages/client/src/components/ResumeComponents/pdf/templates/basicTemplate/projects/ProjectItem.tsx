import pdf from "@react-pdf/renderer";
const { StyleSheet, View, Text, Link } = pdf;

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
    textDecoration: "none",
  },
  innerView: {
    marginBottom: 10,
  },
});

type ProjectItemType = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};

const ProjectItem = ({
  name,
  description,
  repoUrl,
  liveUrl,
}: ProjectItemType) => {
  // console.log(EduItem);
  return (
    <View style={styles.innerView}>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.sectionChild1}>{`# Name : ${name}`}</Text>
        <Text
          style={styles.sectionChild2}
        >{`Description : ${description}`}</Text>
        <Link
          style={styles.sectionChild3}
          src={repoUrl}
        >{`RepoURL : ${repoUrl}`}</Link>
        <Link
          style={styles.sectionChild3}
          src={liveUrl}
        >{`LiveURL : ${liveUrl}`}</Link>
      </View>
    </View>
  );
};
export default ProjectItem;
