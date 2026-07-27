import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: siteConfig.url!,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${siteConfig.url}/about`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: `${siteConfig.url}/work`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteConfig.url}/stack`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        
    ];
}