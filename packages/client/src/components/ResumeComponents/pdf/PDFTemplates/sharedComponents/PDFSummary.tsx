import { Text } from "@react-pdf/renderer";
import HrBar from "./../sharedComponents/PDFHrBar";
import ItemWrapper from "./../sharedComponents/PDFItemWrapper";
import Section from "./../sharedComponents/PDFSection";

const Summary = ({ About, MainColor }: any) => {
  return (
    <Section MainColor={MainColor} Title="Summary">
      <HrBar MainColor={MainColor} />
      <ItemWrapper>
        <Text style={{ fontSize: "12px" }}>{About}</Text>
      </ItemWrapper>
    </Section>
  );
};

export default Summary;
