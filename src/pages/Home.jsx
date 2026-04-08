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
                                <Button className="" text="Get a Quote" />
                            </div>
                        </div>

                        <div className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6">
                                Schedule your Free Consultation today
                            </h3>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-gray-900 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-gray-900 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-gray-900 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full px-4 h-12 rounded-full border border-gray-300 text-gray-900 
               placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007AAE] transition-all duration-200"
                                />

                                <Button text="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg font-medium text-gray-700 mb-4">
                        Trusted by families across 50+ locations nationwide
                    </p>
                    <div className="flex flex-wrap justify-center gap-18 text-(--secondary-color) text-md font-medium">
                        {brands.map((brand) => (
                            <span key={brand}>{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            <CoverageSection />

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