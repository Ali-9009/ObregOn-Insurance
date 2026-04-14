// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function RentersInsurance() {
    return (
        <Layout
            title="Renters Insurance"
            subtitle="Affordable protection for your belongings and peace of mind even if you don't own the building."
            overview={{
                title: "Coverage Overview",
                text: `Your landlord's policy does not cover your personal belongings. Renters insurance from Obregon Insurance protects your possessions against theft, fire, and other covered events. It also provides liability coverage if someone is injured in your rental unit, and additional living expenses if you need to temporarily relocate.`,
            }}
            overviewImg="/assets/r-i-1.png"
            coverTitle="What Renters Insurance Covers"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "Personal property protection",
                "Additional living expenses",
                "Theft coverage (including off-premises)",
                "Vandalism protection",
                "Liability coverage",
                "Medical payments to others",
                "Fire and smoke damage",
                "Water damage (non-flood)",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}