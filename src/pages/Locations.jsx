import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from "./Contact";
import StoreLocations from "../components/StoreLocations";

function Locations() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">

                    <h2 className="text-[30px] md:text-[45px] font-bold leading-tight mt-3">
                        Find a Location
                    </h2>

                    <p className="mt-4 text-lg text-gray-200">
                        Visit an Obregon Insurance office near you for in-person service and expert guidance.
                    </p>
                </div>
            </section>

            <StoreLocations />

            <div
                id="contact"
                className="max-w-4xl mx-auto px-6 py-6 text-center scroll-mt-28"
            >
                <h2 className="primary-heading mt-3">
                    Contact Us
                </h2>

                <p className="mt-4 text-lg text-(--text-color)">
                    Have questions or ready to get a quote? Reach out our team is happy to help.
                </p>
            </div>

            <Contact />
        </>
    );
}

export default Locations;