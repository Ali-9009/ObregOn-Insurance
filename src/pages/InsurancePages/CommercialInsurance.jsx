// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function CommercialInsurance() {
    return (
        <Layout
            title="Commercial Insurance"
            subtitle="Protect your business, your employees, and your livelihood with coverage designed for commercial operations."
            overview={{
                title: "Coverage Overview",
                text: `Running a business comes with inherent risks. Obregon Insurance offers commercial policies tailored to businesses of all sizes — from sole proprietors to multi-location enterprises. We help you identify your exposures and build a coverage plan that protects your assets, employees, and operations.`,
            }}
            overviewImg="/assets/c-i-1.png"
            coverTitle="What Commercial Insurance Covers"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "General liability insurance",
                "Business interruption insurance",
                "Professional liability (E&O)",
                "Cyber liability coverage",
                "Commercial property coverage",
                "Workers compensation",
                "Commercial auto insurance",
                "Equipment breakdown protection",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}