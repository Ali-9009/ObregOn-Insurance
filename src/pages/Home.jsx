import { CheckCircle } from "lucide-react";

import CounterX from "../components/Counter";
import CoverageSection from "../components/CoverageSection";
import Button from "../components/PrimaryBtn";
import Testimonials from "../components/Testimonials";

const stats1 = [
    { label: "Policies Written", value: 25347 },
    { label: "Office Locations", value: 53 },
    { label: "Client Retention", value: 98, isPercentage: true },
];

const brands = [
    "Foremost",
    "Liberty Mutual",
    "Progressive",
    "Travelers",
    "Safeco",
    "Kemper",
    "Nationwide",
    "Hartford",
];

const leftItems = [
    "Personal Auto",
    "Homeowners & Renters",
    "Flood",
    "Umbrella Policies",
    "Commercial Property & Condo Associations",
    "Commercial Auto, Garage, & Gas Station Risks",
    "Workers’ Comp",
];

const rightItems = [
    "Yachts & Boats",
    "Jet Skis & Recreational Coverage",
    "Jewelry, Collectibles, and other Valuable Items",
    "General Liability",
    "Business Owners Policies (BOPs)",
    "Restaurants & Liquor Liability",
    "Broadcast Station",
];

const rightItemsNext = [
    "We learn what matters most to you",
    "We shop the market on your behalf",
    "We explain your options in plain language",
    "You choose what feels right, confidently",
];

const topImages = [
    "/assets/h-insurance.png",
    "/assets/c-insurance.png",
    "/assets/a-insurance.png",
    "/assets/r-insurance.png",
    "/assets/f-insurance.png",
    "/assets/l-insurance.png",
];

function Home() {
    return (
        <>
            <section className="relative bg-[url('/assets/home-bg.png')] bg-cover bg-center bg-no-repeat">
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[50%_45%] gap-10 items-center text-white">
                        <div>
                            <p className="text-md text-gray-200">
                                Trusted by families nationwide
                            </p>
                            <h2 className="md:text-[55px] text-[30px] font-bold leading-tight mt-3">
                                You Are Our Business.
                            </h2>

                            <p className="mt-4 text-lg text-gray-200">
                                Here to help you find the right coverage,
                                with clarity and cover.
                            </p>
                            <p className="mt-4 text-lg text-gray-200 italic">
                                Serving the South Florida community with personalized insurance solutions since 2005.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <Button className="" to="/contact" text="Get a Quote" />
                            </div>
                        </div>

                        <div className="lg:max-w-sm mx-auto w-full  relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                            <h3 className="text-2xl md:text-3xl text-center mb-6">
                                Schedule your Free Consultation today
                            </h3>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-white 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-white 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-white 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-white 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />

                                <Button text="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-6 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-base sm:text-lg font-medium text-gray-700 mb-4">
                        Trusted by families across 50+ locations nationwide
                    </p>

                    <div className="flex flex-wrap justify-center items-center 
                        gap-x-6 gap-y-3 
                        text-sm sm:text-md 
                        text-(--secondary-color) font-medium">
                        {brands.map((brand) => (
                            <span key={brand} className="whitespace-nowrap">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <CoverageSection />

            <section className="py-12 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="primary-heading mb-6">
                        Personal and Commercial Insurance Solutions
                    </h2>
                    <p className="text-(--text-color) text-lg mb-8">
                        We work with over 50 top-rated carriers to find the coverage that fits your life and your budget.
                    </p>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:gap-10 mt-10 text-left">
                        {/* Left */}
                        <ul className="space-y-3">
                            {leftItems.map((item, i) => (
                                <li className="flex items-start gap-3 text-lg font-medium text-(--text-color)">
                                    <CheckCircle className="text-(--secondary-color) w-5 h-5 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Right */}
                        <ul className="space-y-3">
                            {rightItems.map((item, i) => (
                                <li className="flex items-start gap-3 text-lg font-medium text-(--text-color)">
                                    <CheckCircle className="text-(--secondary-color) w-5 h-5 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-8 w-32 mx-auto">
                        <Button to="/insurance" text="Insurance" />
                    </div>

                    {/* Footer text */}
                    <p className="mt-4 text-slate-500">
                        Learn More About These Coverages!
                    </p>
                </div>
                
                <div className="w-full overflow-hidden my-10">
                    <div className="flex animate-marquee">
                        {[...topImages, ...topImages].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="h-36 md:h-44 w-auto mx-2 object-cover"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-12">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <img
                        src="/assets/h-1.png"
                        alt="Handshake"
                        className="mx-auto mb-6"
                    />
                    <h2 className="primary-heading mb-6">
                        We sit on your side of the table.
                    </h2>
                    <p className="text-(--text-color) text-lg mb-8">
                        Most agencies represent the carrier. We represent you. Our agents compare dozens of options to find the coverage that actually fits your life — not the one that pays them the highest commission.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-(--text-color) text-lg">
                        <div className="flex  items-start gap-2">
                            <CheckCircle className="text-(--secondary-color) mt-1" size={20} />
                            <span>Licensed agents, real conversations</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="text-(--secondary-color) mt-1" size={20} />
                            <span>Bilingual: English & Spanish</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="text-(--secondary-color) mt-1" size={20} />
                            <span>50+ carriers compared for you</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="text-(--secondary-color) mt-1" size={20} />
                            <span>Claims advocacy when it counts</span>
                        </div>
                    </div>
                </div>
            </section >

            <section className="md:py-12 py-8 px-6 bg-white">
                <div className="max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-10 text-left">

                        {/* LEFT */}
                        <div>
                            <h3 className="primary-heading">
                                Local. Trusted. Experienced.
                            </h3>

                            <p className="mt-3 font-bold text-(--text-color) text-lg">
                                Here for Our Community Since 2005
                            </p>

                            <p className="mt-3 text-(--text-color) text-lg">
                                Obregon Insurance is a bilingual, independent insurance agency based in Miami. For nearly two decades, we've helped our community protect what matters most: their families, their businesses, and their futures.
                            </p>

                            <p className="mt-3 text-(--text-color) text-lg">
                                We know insurance can feel confusing or impersonal. That's why we lead with clarity and respect. Whether you're reviewing your auto policy, securing homeowners coverage, or insuring your business, you can count on us to make it make sense.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <h3 className="primary-heading">
                                Coverage Options That Fit You
                            </h3>

                            <p className="mt-3 text-(--text-color) text-lg">
                                As an independent agency, we're not tied to one carrier. That means we can compare rates and coverage across multiple insurance companies to find the protection that fits your needs and your budget.
                            </p>

                            <p className="mt-3 font-bold text-(--text-color) text-lg">
                                We make the process simple:
                            </p>

                            <ul className="space-y-3 mt-6">
                                {rightItemsNext.map((item, i) => (
                                    <li className="flex items-start gap-3 text-lg font-medium text-(--text-color)">
                                        <CheckCircle className="text-(--secondary-color) w-5 h-5 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <CounterX
                stats={stats1}
                numberClass="text-(--secondary-color)"
                labelClass="text-(--text-color)"
                footerText="4.8 out of 5 from 2,100+ reviews"
            />

            <Testimonials />
        </>
    );
}

export default Home;