import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/PrimaryBtn";


function Contact() {
    return (
        <>
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">

                    <h2 className="text-[30px] md:text-[45px] font-bold leading-tight mt-3">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Have questions or ready to get a quote? Reach out our team is happy to help.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="primary-heading mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-(--text-color) text-lg mb-6 leading-relaxed">
                            Fill out the form and one of our licensed agents will respond within
                            one business day. Or contact us directly using the information below.
                        </p>

                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-(--secondary-color)" />
                                <span>example@e...</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-(--secondary-color) mt-1" />
                                <span>
                                    1740 SW 57 Ave, Miami, FL 33155
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-(--secondary-color)" />
                                <span>+44 123 654 7890</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <form className="space-y-4">

                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                            />

                            <input
                                type="text"
                                placeholder="Insurance Type"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                            />

                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none focus:ring-1 focus:ring-(--primary-color)"
                            />

                            <Button className="w-full" text="Send Message" />
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;