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
                { title: "Personal Attention", desc: "We tailor plans for you." },
                { title: "Competitive Rates", desc: "Affordable coverage." },
                { title: "Claims Support", desc: "We help when you need it." },
            ]}
        />
    );
}