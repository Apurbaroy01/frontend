
import { Metadata } from 'next';
import StackPage from './StackPage';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: "Stack | " + siteConfig.name,
    description: siteConfig.description,
};

const Stack = () => {
    return (
        <div>
            <StackPage />
        </div>
    );
};

export default Stack;