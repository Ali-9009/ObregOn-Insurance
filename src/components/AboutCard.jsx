import { ShieldCheck } from "lucide-react";

export default function AboutCard() {
    const data = [
        {
            title: "Your Advocate",
            desc: "it protects the people, businesses, and milestones that define your life. At Obregon Insurance,. That commitment guides everything we do today.",
        },
        {
            title: "No Fine Print Games",
            desc: "We’re proud to serve our neighbors and fellow business owners throughout Florida, with bilingual service and local insight.",
        },
        {
            title: "Rooted in Community",
            desc: "We know how to navigate our community’s unique risks, so from hurricanes and flood zones, to PIP law and liability risks, we’ve got you covered  with a cafecito in hand!",
        },
    ];

    return (
        <section className="bg-blue-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="primary-heading mt-2">
                        We believe insurance is personal:
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            <img src="/assets/c-i.png" className="w-12 mb-4" alt="" />

                            {/* Title */}
                            {/* <h3 className="font-semibold text-lg text-(--secondary-color)">
                                {item.title}
                            </h3> */}

                            {/* Description */}
                            <p className="text-md text-(--text-color) mt-2 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}