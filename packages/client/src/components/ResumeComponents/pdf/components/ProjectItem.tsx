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
    <View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.sectionChild1}>{`Name : ${name}`}</Text>
        <Text
          style={styles.sectionChild2}
        >{`Description : ${description}`}</Text>
        <Text style={styles.sectionChild3}>{`RepoURL : ${repoUrl}`}</Text>
        <Text style={styles.sectionChild3}>{`LiveURL : ${liveUrl}`}</Text>
      </View>
    </View>
  );
};
export default ProjectItem;
