import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";


import Button from "./PrimaryBtn";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Insurance", path: "/insurance" },
        { name: "Franchise", path: "/franchise" },
        { name: "Locations", path: "/location" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-(--primary-color) text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:3052656226" className="flex items-center gap-2 hover:underline">
                            <Phone size={16} />
                            <span>305.265.6226</span>
                        </a>
                        <a href="mailto:obregoninsurance@gmail.com" className="flex items-center gap-2 hover:underline">
                            <Mail size={16} />
                            <span>obregoninsurance@gmail.com</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-lg">
                        <i className="ri-facebook-fill cursor-pointer"></i>
                        <i className="ri-twitter-fill cursor-pointer"></i>
                        <i className="ri-instagram-line cursor-pointer"></i>
                        <i className="ri-youtube-fill cursor-pointer"></i>
                    </div>
                </div>
            </div>

            {/* Sticky Navbar */}
            <div
                className={`bg-white transition-all border-b border-gray-300 duration-300 ${sticky
                        ? "fixed top-0 left-0 w-full shadow-md z-50 animate-slideDown"
                        : "relative"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <img src="/assets/logo.png" className="w-26" alt="" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-(--secondary-color)">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="hover:text-[#0b5e7a]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button to="/login" text="Login"/>
                        <div className="flex items-center gap-2 border px-3 py-1 rounded-full text-sm">
                            🇺🇸 <span>EN</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        className="lg:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </Button>
                </div>
            </div>

            {/* Sidebar (Right Side) */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                        <img src="/assets/logo.png" className="w-20" alt="" />
                    </div>
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)} // close menu
                            className="text-gray-700 hover:text-[#0b5e7a]"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button text="Login" />

                    <div className="flex items-center gap-2 border px-3 py-2 rounded-full w-fit mt-2">
                        🇺🇸 <span>EN</span>
                    </div>
                </div>

                {/* Bottom Social Icons */}
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-300 flex justify-start gap-5 text-xl">
                    <i className="ri-facebook-fill cursor-pointer"></i>
                    <i className="ri-twitter-fill cursor-pointer"></i>
                    <i className="ri-instagram-line cursor-pointer"></i>
                    <i className="ri-youtube-fill cursor-pointer"></i>
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Custom Animation */}
            <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
        </header>
    );
}
