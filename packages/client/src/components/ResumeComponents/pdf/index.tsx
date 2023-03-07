import { PDFViewer } from "@react-pdf/renderer";
import MyPdfDocument from "./MyPdfDocument.jsx";
const Pdf = () => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <MyPdfDocument />
    </PDFViewer>
  );
};

export default Pdf;
