import ProjectsSection from '@/components/ProjectCard';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Work | " + siteConfig.name,
    description: siteConfig.description,
};

const WorkPage = () => {
    return (
        <div>
            <ProjectsSection />
        </div>
    );
};

export default WorkPage;