import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        // { name: "Insurance", path: "/insurance" },
        // { name: "Franchise", path: "/franchise" },
        { name: "Locations", path: "/location" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const insuranceLinks = [
        { name: "Home Insurance", path: "/homeInsurance" },
        { name: "Auto Insurance", path: "/autoInsurance" },
        { name: "Commercial Insurance", path: "/commercialInsurance" },
        { name: "Life Insurance", path: "/lifeInsurance" },
        { name: "Renters Insurance", path: "/rentersInsurance" },
        { name: "Flood Insurance", path: "/floodInsurance" },
    ];

    const footerLinks = [
        { name: "Privacy Policy", path: "/privacyPolicy" },
        { name: "DMCA Policy", path: "/dmca" },
        { name: "Make a Payment", path: "/payment" },
    ];

    return (
        <footer className="bg-(--secondary-color) text-white px-8 md:px-20 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-10">

                    {/* LOGO */}
                    <div>
                        <Link to="/">
                            <img src="/assets/logo-1.png" className="w-30" alt="logo" />
                        </Link>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* INSURANCE */}
                    <div>
                        <h3 className="font-semibold mb-3">Insurance</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            {insuranceLinks.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>

                        <div className="flex items-center gap-2 text-sm text-gray-200 mb-2">
                            <Phone size={14} />
                            <a href="tel:+17868842070" className="hover:text-white">
                                (786) 884-2070
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-200">
                            <Mail size={14} />
                            <a href="mailto:Support@hellopeasy.com" className="hover:text-white">
                                Support@hellopeasy.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-400/30 my-8"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
                    <p>© 2026 Obregon Insurance. All rights reserved.</p>

                    <div className="flex gap-6">
                        {footerLinks.map((link, i) => (
                            <Link key={i} to={link.path} className="hover:text-white">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}