
import { Metadata } from 'next';
import EducationSection from './EducationSection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: "Education | " + siteConfig.name,
    description: siteConfig.description,
};

const Educations = () => {
    return (
        <div>
            <EducationSection />
        </div>
    );
};

export default Educations;