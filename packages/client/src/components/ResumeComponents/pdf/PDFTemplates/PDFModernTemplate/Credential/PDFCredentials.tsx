import ItemWrapper from "../../sharedComponents/PDFItemWrapper";
import Section from "../../sharedComponents/PDFSection";
import HrBar from "./../../sharedComponents/PDFHrBar";
import CredentialItem from "./PDFCredentialItem";

type crsPropsType = {
  id: string;
  title: string;
  image: string;
  institution: string;
  cartificateUrl: string;
  cartificateId: string;
  courseDuration: string;
  achivedAt: string;
};
const Credentials = ({ Credentials, MainColor }: any) => {
  const cred = [...Credentials].reverse().slice(0, 3);
  return (
    <Section MainColor={MainColor} Title="Certification">
      <HrBar MainColor={MainColor} />
      <ItemWrapper>
        {cred.map((crs: crsPropsType, index: number) => {
          return (
            <CredentialItem
              key={index}
              title={crs.title}
              institution={crs.institution}
              courseDuration={crs.courseDuration}
              achivedAt={crs.achivedAt}
            />
          );
        })}
      </ItemWrapper>
    </Section>
  );
};

export default Credentials;
