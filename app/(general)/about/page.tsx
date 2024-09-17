import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'SEO Description',
    keywords: ['About Page', 'Enio', 'información', '...']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}