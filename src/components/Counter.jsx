import { useEffect, useState } from "react";

function Counter({ target, isPercentage }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const duration = 1500;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);
            const value = Math.floor(percentage * target);

            setCount(value);

            if (percentage < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target]);

    return (
        <span>
            {count.toLocaleString()}
            {isPercentage ? "%" : count >= 1 ? "+" : ""}
        </span>
    );
}

export default function CounterX({
    stats = [],
    className = "",
    numberClass = "",
    labelClass = "",
    footerText = "",
}) {
    return (
        <section className={`w-full px-6 py-8 ${className}`}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 text-center">
                {stats.map((item, index) => (
                    <div key={index} className="p-6">
                        <h3 className={`text-4xl font-bold ${numberClass}`}>
                            <Counter
                                target={item.value}
                                isPercentage={item.isPercentage}
                            />
                        </h3>
                        <p className={`mt-2 text-lg ${labelClass}`}>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {footerText && (
                <p className="text-lg text-center mt-6">
                    {footerText}
                </p>
            )}
        </section>
    );
}