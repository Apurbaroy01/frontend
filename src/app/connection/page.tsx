import ConnectSection from "@/components/ConnectSection";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connection | " + siteConfig.name,
    description: siteConfig.description,
};
const Connection = () => {
    return (
        <div>
            <ConnectSection />
        </div>
    );
};

export default Connection;