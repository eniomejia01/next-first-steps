import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Precio de los productos',
    keywords: ['Pricing Page', 'Enio', 'información', '...']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}