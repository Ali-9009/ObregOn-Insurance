import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./PrimaryBtn";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const langRef = useRef(null);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Insurance", path: "/insurance" },
        { name: "Locations", path: "/location" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    // Sticky scroll
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
                        <a href="tel:3052656226" className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>305.265.6226</span>
                        </a>
                        <a href="mailto:obregoninsurance@gmail.com" className="flex items-center gap-2">
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

            {/* NAVBAR */}
            <div
                className={`bg-white border-b border-gray-300 transition-all duration-300 z-50 ${sticky
                        ? "fixed top-0 left-0 w-full shadow-md"
                        : "relative"
                    }`}
            >
                <div
                    className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-300 ${sticky ? "py-2" : "py-4"
                        }`}
                >

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            alt="logo"
                            className={`object-contain transition-all duration-300 origin-left ${sticky ? "h-10" : "h-14"
                                }`}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-(--secondary-color)">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Button to="/login" text="Login" />

                        <LanguageSelector />

                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden flex items-center gap-4">
                  
                            <LanguageSelector />

                        <button onClick={() => setOpen(true)}>
                            ☰
                        </button>
                    </div>

                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <img src="/assets/logo.png" className="w-20" alt="" />
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button text="Login" />
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}