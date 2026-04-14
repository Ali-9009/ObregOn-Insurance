// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function HomeInsurance() {
    return (
        <Layout
            title="Home Insurance"
            subtitle="Comprehensive coverage to protect your home, belongings, and the people who live there."
            overview={{
                title: "Coverage Overview",
                text: `Your home is more than a building it is where life happens. Obregon Insurance offers homeowners policies that cover your dwelling, personal property, liability, and additional living expenses. Whether you own a single-family home, condo, or townhouse, we help you build a plan that provides full protection against the unexpected.`,
            }}
            overviewImg="/assets/h-i-1.png"
            coverTitle="What Home Insurance Covers"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "Dwelling protection (structure of your home)",
                "Liability protection",
                "Medical payments to others",
                "Theft and vandalism coverage",
                "Personal property coverage",
                "Additional living expenses",
                "Detached structures (garages, sheds)",
                "Weather-related damage",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}