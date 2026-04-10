import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            q: "What does homeowners insurance cover?",
            a: "It typically covers your home's structure, personal belongings, liability protection, and additional living expenses if your home becomes unlivable."
        },
        {
            q: "Is flood damage covered?",
            a: "No, standard policies do not cover floods. You need separate flood insurance for that coverage."
        },
        {
            q: "How can I lower my premium?",
            a: "You can bundle policies, increase your deductible, improve home security, and maintain a good claims history."
        },
        {
            q: "Does it cover theft outside my home?",
            a: "Yes, most policies cover personal belongings even when they are stolen outside your home."
        },
        {
            q: "How do I file a claim?",
            a: "You can contact your insurance provider directly or work with your agent to guide you through the process."
        },
    ];

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="primary-heading mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl overflow-hidden transition"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-medium text-(--secondary-color)">
                                    {item.q}
                                </span>

                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${active === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-5 transition-all duration-300 overflow-hidden ${active === i ? "max-h-40 pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-(--text-color) text-sm leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}