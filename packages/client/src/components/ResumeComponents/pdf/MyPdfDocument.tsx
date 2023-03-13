import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import BasicPdfTemplate from "./templates/basicTemplate/";
const styles = StyleSheet.create({
  page: {
    margin: "0 0",
    backgroundColor: "white",
    width: "100%",
  },
});
const MainColor = localStorage.getItem("TitleColor");
const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <BasicPdfTemplate MainColor={MainColor} />
    </Page>
  </Document>
);

export default MyPdfDocument;
