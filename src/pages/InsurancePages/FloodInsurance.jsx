// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function FloodInsurance() {
    return (
        <Layout
            title="Flood Insurance"
            subtitle="Dedicated flood coverage to protect your property from one of nature's most common and costly disasters."
            overview={{
                title: "Coverage Overview",
                text: `Standard homeowners and renters policies do not cover flood damage. Obregon Insurance provides flood insurance through the National Flood Insurance Program (NFIP) and private carriers to protect your home, business, and belongings from flood-related losses. Whether you are in a high-risk zone or simply want extra protection, we can help.`,
            }}
            overviewImg="/assets/f-i-1.png"
            coverTitle="What Flood Insurance Covers"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "Building / structural coverage",
                "Basement and foundation damage",
                "HVAC equipment",
                "Cleanup and debris removal",
                "Contents / personal property",
                "Electrical and plumbing systems",
                "Appliances (washers, dryers, etc.)",
                "Temporary relocation costs (select policies)",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}