import { StyleSheet } from "@react-pdf/renderer";
import CredentialItem from "./CredentialItem";
import Section from "./Section";
import { SectionContainerV } from "./SectionContainer";
const styles = StyleSheet.create({
  sectionTitle: {
    color: "#336699",
    fontSize: "15",
    fontWeight: "bold",
  },
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
  const MainColor = localStorage.getItem('TitleColor')
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
