import AboutCard from "../components/AboutCard";

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
                        Obregon Insurance was built through decades of industry experience, long-term client relationships, and a commitment to serving the community with consistency and care.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-(--text-color)">

                        <h2 className="primary-heading mt-2">
                            Founder and CEO Ana Obregon
                        </h2>

                        <p className="mt-4 text-lg">
                            Began began her career in the insurance industry in 1989 and became a licensed insurance agent in 1991. She primarily worked in the captive agency model, where she developed extensive experience in agency operations, customer service, and business growth.
                        </p>

                        <p className="mt-4 text-lg">
                            In 2009, Ana decided to move in a new direction, establishing Obregon Insurance as an independent insurance agency. The decision was driven by a desire to combine the professionalism, structure, and recognition of a captive agency environment with the flexibility and broader market access of the independent agency model.
                        </p>
                        <p className="mt-4 text-lg">
                            That philosophy continues to define the organization today.
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

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/about-2.png"
                            alt="about"
                            className=""
                        />
                    </div>

                    <div className="text-(--text-color)">

                        <h2 className="primary-heading mt-2">
                            Obregon Insurance has grown
                        </h2>

                        <p className="mt-4 text-lg">
                            through long-standing relationships, community presence, referrals, and consistent service across South Florida. Over the years, we have built a reputation for being accessible, relationship-driven, and connected to the communities we serve. While technology and customer expectations have evolved, the agency has remained grounded in the belief that insurance is ultimately a people business.
                        </p>

                        <p className="mt-4 text-lg">
                            That commitment became especially evident during and after the COVID-19 pandemic. Even as much of the industry shifted toward fully digital interactions, many clients continued returning to the office in person not out of necessity, but because of the trust and relationships built over years of service. Those relationships remain one of the strongest foundations of the Obregon brand.
                        </p>
                    </div>
                </div>
            </section>

            <AboutCard />

            {/* <CounterX
                stats={stats2}
                numberClass="text-(--secondary-color)"
                labelClass="text-(--text-color)"
                className="bg-blue-100 rounded-2xl"
            /> */}
        </>
    );
}

export default About;