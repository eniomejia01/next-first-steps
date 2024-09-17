import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contacta al vendedor',
    keywords: ['Contact Page', 'Enio', 'información', '...']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}