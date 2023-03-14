import { Text } from "@react-pdf/renderer";
import HrBar from "./../sharedComponents/HrBar";
import ItemWrapper from "./../sharedComponents/ItemWrapper";
import Section from "./../sharedComponents/Section";

const Summary = ({ About }: any) => {
  return (
    <Section Header="Summary">
      <HrBar />
      <ItemWrapper>
        <Text>{About}</Text>
      </ItemWrapper>
    </Section>
  );
};

export default Summary;
