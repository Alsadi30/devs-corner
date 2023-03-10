import { StyleSheet } from "@react-pdf/renderer";
import Section from "./../Section";
import { SectionContainerV } from "./../SectionContainer";
import CredentialItem from "./CredentialItem";
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
const Credentials = ({ Credentials }: any) => {
  var MainColor = "#336699";
  const cred = [...Credentials].reverse().slice(0, 3);
  // console.log(cred);
  return (
    <Section Title="CREDENTIALS">
      <SectionContainerV>
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
      </SectionContainerV>
    </Section>
  );
};

export default Credentials;
