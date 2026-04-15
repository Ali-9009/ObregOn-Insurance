import Cards from "../components/Cards";
import CounterX from "../components/Counter";

const stats2 = [
    { label: "Policies Written", value: 25347 },
    { label: "Office Locations", value: 53 },
    { label: "Licensed Agents", value: 200 },
    { label: "Client Retention", value: 98, isPercentage: true },
];

function About() {
    return (
        <>
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">

                    <h2 className="text-[30px] md:text-[45px] font-bold leading-tight mt-3">
                        About Obregon Insurance
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Built on trust, driven by service. We are committed to protecting the people and businesses that make our communities strong.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-(--text-color)">
                        <p className="text-md">
                            Our Story
                        </p>

                        <h2 className="primary-heading mt-2">
                            Started with one office. Built on one promise.
                        </h2>

                        <p className="mt-4 text-lg">
                            Obregon Insurance began with a single storefront and a belief that insurance doesn't have to be confusing. We saw families overpaying for coverage they didn't understand, and agents who cared more about commissions than clients.
                        </p>

                        <p className="mt-4 text-lg">
                            So we built something different. Today, our network of 50+ offices and 200+ licensed agents serves over 25,000 families — and every one of them gets the same thing: an honest comparison, a fair price, and an agent who picks up the phone.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/about-1.png"
                            alt="about"
                            className=""
                        />
                    </div>

                </div>
            </section>

            <Cards />

            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/about-2.png"
                            alt="about"
                            className=""
                        />
                    </div>

                    <div className="text-(--text-color)">
                        <p className="text-md">
                            Our Mission
                        </p>

                        <h2 className="primary-heading mt-2">
                            Insurance for everyone. In every language.
                        </h2>

                        <p className="mt-4 text-lg">
                            We serve diverse communities across the country with fully bilingual agents who speak English and Spanish fluently. Insurance is complicated enough — the language barrier shouldn't make it harder.
                        </p>

                        <p className="mt-4 text-lg">
                            From your first renter's policy to your growing business, Obregon agents walk you through every option and make sure you understand exactly what you're getting. No jargon. No pressure. Just clarity.
                        </p>
                    </div>
                </div>
            </section>

            

            <CounterX
                stats={stats2}
                numberClass="text-(--secondary-color)"
                labelClass="text-(--text-color)"
                className="bg-blue-100 rounded-2xl"
            />
        </>
    );
}

export default About;