import HrBar from "../../sharedComponents/HrBar";
import Section from "../../sharedComponents/Section";
import CredItem from "./CredItem";

type credPropsType = {
  title: string;
  institution: string;
  achivedAt: string;
};

const Credentials = ({ Credentials }: any) => {
  const LatestCred = [...Credentials].reverse().slice(0, 3);
  return (
    <Section Header="Certification">
      <HrBar />
      {LatestCred.map((cred: credPropsType, index: number) => {
        return (
          <CredItem
            key={index}
            title={cred.title}
            institution={cred.institution}
            achivedAt={cred.achivedAt}
          />
        );
      })}
    </Section>
  );
};

export default Credentials;
