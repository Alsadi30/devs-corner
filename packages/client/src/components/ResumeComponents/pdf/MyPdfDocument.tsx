import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import BasicPdfTemplate from "./templates/basicTemplate/";
const styles = StyleSheet.create({
  page: {
    margin: "10 0",
    backgroundColor: "white",
    width: "100%",
  },
});

const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <BasicPdfTemplate MainColor="#336600" />
    </Page>
  </Document>
);

export default MyPdfDocument;
