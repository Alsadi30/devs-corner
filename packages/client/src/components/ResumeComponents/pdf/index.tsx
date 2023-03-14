import pdf from "@react-pdf/renderer";
const { PDFViewer } = pdf;
import MyPdfDocument from "./MyPdfDocument.jsx";

const Pdf = () => {
  // Font.register({
  //   family: 'Inter',
  //   fonts: [
  //     {
  //       fontStyle: 'normal',
  //       fontWeight: 400,
  //       format: 'woff',
  //       src: `../../.../../../assets/Inter/inter/Inter[slnt,wght].woff`
  //     }
  //   ]
  // })
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <MyPdfDocument />
    </PDFViewer>
  );
};

export default Pdf;
