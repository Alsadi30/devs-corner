import Section from "../components/Section";
import CredItem from "./CredItem";

type credPropsType = {
  title: string;
  institution: string;
  achivedAt: string;
};

const Credentials = ({ Credentials }: any) => {
  const LatestCred = [...Credentials].reverse().slice(0, 3);
  return (
    <Section Header="CREDENTIALS">
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
