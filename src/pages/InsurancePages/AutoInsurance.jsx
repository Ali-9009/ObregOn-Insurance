// pages/HomeInsurance.jsx
import Layout from "./Layout";

export default function AutoInsurance() {
    return (
        <Layout
            title="Auto insurance"
            subtitle="Reliable coverage for your vehicle, your passengers, and your peace of mind on the road."
            overview={{
                title: "Coverage Overview",
                text: "From daily commutes to family road trips, Obregon Insurance keeps you covered behind the wheel. We offer a range of auto insurance options including liability, collision, comprehensive, and uninsured motorist coverage. Our agents compare rates from multiple carriers to find you the best policy at the best price.",
            }}
            overviewImg="/assets/a-i-1.png"
            coverTitle="What Auto Insurance Covers"
            coverImg="/assets/h-i-2.png"
            coverList={[
                "Liability coverage (bodily injury & property)",
                "Comprehensive coverage",
                "Medical payments coverage",
                "Roadside assistance",
                "Collision coverage",
                "Uninsured/underinsured motorist",
                "Personal injury protection (PIP)",
                "Rental car reimbursement",
            ]}
            whyData={[
                { title: "Personal Attention", desc: "Every client gets a dedicated agent who understands their unique coverage needs." },
                { title: "Competitive Rates", desc: "We partner with top-rated carriers to find you the best coverage at the best price." },
                { title: "Claims Support", desc: "When you need us most, our team guides you through every step of the claims process.." },
            ]}
        />
    );
}