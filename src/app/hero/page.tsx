
import { Metadata } from 'next';
import HeroPage from './HeroPage';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

const Hero = () => {
    return (
        <div>
            <HeroPage />
        </div>
    );
};

export default Hero;