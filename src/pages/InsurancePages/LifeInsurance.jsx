// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function LifeInsurance() {
    return (
        <Layout
            title="Life Insurance"
            subtitle="Provide for the people who depend on you even when you are no longer there."
            overview={{
                title: "Coverage Overview",
                text: `Life insurance is one of the most important financial decisions you can make for your family. Obregon Insurance helps you explore term and permanent life insurance options so you can choose a policy that fits your budget and provides lasting security for your loved ones`,
            }}
            overviewImg="/assets/l-i-1.png"
            coverTitle="Life Insurance Options"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "Term life insurance (10, 20, 30-year)",
                "Universal life insurance",
                "Accidental death coverage",
                "Spousal coverage options",
                "Whole life insurance",
                "Final expense / burial insurance",
                "Child life insurance riders",
                "Accelerated death benefit riders",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}