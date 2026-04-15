
import { Link } from "react-router-dom";

const coverageData = [
    {
        title: "Home Insurance",
        description:
            "Protect your most valuable asset with coverage for your home, belongings, and liability.",
        img: "/assets/h-insurance.png",
        link: "/homeInsurance",
    },
    {
        title: "Commercial Insurance",
        description:
            "Commercial insurance shields businesses from losses, covering property, liability, and workers' compensation.",
        img: "/assets/c-insurance.png",
        link: "/commercialInsurance",
    },
    {
        title: "Auto Insurance",
        description:
            "Auto insurance is a contract where you pay a premium, and the insurer covers financial losses from accidents as defined in your policy.",
        img: "/assets/a-insurance.png",
        link: "/autoInsurance",
    },
    {
        title: "Renters Insurance",
        description:
            "Affordable protection for your belongings and personal liability as a renter.",
        img: "/assets/r-insurance.png",
        link: "/rentersInsurance",
    },
    {
        title: "Flood Insurance",
        description:
            "Specialized coverage against flood damage that standard policies don't include.",
        img: "/assets/f-insurance.png",
        link: "/floodInsurance",
    },
    {
        title: "Life Insurance",
        description:
            "We find the right coverage, with the best company, at the best price for you.",
        img: "/assets/l-insurance.png",
        link: "/lifeInsurance",
    },
];

export default function CoverageSection() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="primary-heading">Protection that fits your life.</h2>
                <p className="mt-3 text-gray-600 text-lg">
                    We compare rates from 50+ top carriers to find you better coverage at a lower price. It takes 3 minutes.
                </p>

                <div className="md:mt-12 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coverageData.map((item) => (
                        <Link to={item.link} key={item.title}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-[20px] font-semibold text-(--secondary-color)">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-(--text-color) text-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}