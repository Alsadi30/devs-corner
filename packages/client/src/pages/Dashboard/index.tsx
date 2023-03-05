import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import LinkSection from '../../components/SectionItems/LinkSection';
import SocialMedia from '../../components/SectionItems/SocialMediaSection';
import AboutSection from '../../components/Sections/AboutSection';
import CredentialSection from '../../components/Sections/CredentialSection';
import EducationSection from '../../components/Sections/EducationSection';
import ExperienceSection from '../../components/Sections/ExperienceSection';
import ProfileSection from '../../components/Sections/ProfileSection';
import ProjectSection from '../../components/Sections/ProjectSection';
import SkillSections from '../../components/Sections/SkillSections';
import { useGetUserQuery } from '../../features/user/userApi';


const Dashboard = () => {

    const auth = useSelector((state) => state?.auth);
    const {
        data: userData,
        isError,
        isLoading,
    } = useGetUserQuery(auth.user.id);


    if (isLoading || !userData) {
        return <div>...Loading</div>
    }
    console.log(userData[0])

    const { profile, projects, skills, credentials, education, experience, socialmedia } = userData[0]

    return (
        <Layout>
            <ProfileSection profile={profile} />
            <LinkSection />
            <AboutSection text={profile.about} />
            <SkillSections skills={skills} />
            <ProjectSection projects={projects} />
            <CredentialSection credentials={credentials} />
            <EducationSection education={education} />
            <ExperienceSection experience={experience} />
            <SocialMedia items={socialmedia} />
        </Layout>
    );
}


export default Dashboard;
