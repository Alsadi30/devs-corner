
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import SelectedPDFTemplate from "./PDFTemplates/selectedPDFTemplate";

const styles = StyleSheet.create({
  page: {
    margin: "0 0",
    backgroundColor: "white",
    width: "100%",
  },
});
const selectedTemplate = localStorage.getItem("SelectedTemplate");
const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <SelectedPDFTemplate SelectedTemplate={selectedTemplate} />
    </Page>
  </Document>
);

export default MyPdfDocument;
