import { ShieldCheck } from "lucide-react";

export default function Cards() {
    const data = [
        {
            title: "Your Advocate",
            desc: "We represent you, not the carrier. Every recommendation is based on what saves you money and keeps you properly covered.",
        },
        {
            title: "No Fine Print Games",
            desc: "We explain exactly what your policy covers and what it doesn't. You'll never be surprised at claim time.",
        },
        {
            title: "Rooted in Community",
            desc: "Our agents live where you live. They coach Little League, shop at the same stores, and answer their phones on weekends.",
        },
    ];

    return (
        <section className="bg-blue-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-gray-500 text-lg">Our Values</p>
                    <h2 className="primary-heading mt-2">
                        What We Stand For
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
                            <h3 className="font-semibold text-lg text-(--secondary-color)">
                                {item.title}
                            </h3>

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