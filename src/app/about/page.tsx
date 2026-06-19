import { Metadata } from "next";
import AboutPage from "./AboutPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "About | " + siteConfig.name,
    description: siteConfig.description,
};

const About = () => {
    return (
        <div>
            <AboutPage />
        </div>
    );
};

export default About;