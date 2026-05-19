import { MapPinned, Search, Clock8, Smartphone } from "lucide-react";
import Button from "./PrimaryBtn";
import { useState } from "react";

const StoreLocations = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
    return (
        <section className="px-4 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Search */}
                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-md flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
                        <Search size={16} className="text-gray-400 mr-2" />

                        <input
                            type="text"
                            placeholder="search by , my location, zipcode ,address"
                            className="w-full bg-transparent outline-none text-sm text-gray-600"
                        />
                    </div>
                </div>

                {/* Layout */}
                <div className="grid lg:grid-cols-[320px_1fr] gap-6">

                    {/* LEFT SIDEBAR */}
                    <div className="space-y-5">

                        {/* Heading Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                            <p className="text-sm text-gray-500">
                                Our Offices
                            </p>

                            <h2 className="text-3xl font-semibold text-(--secondary-color) mt-2">
                                All Locations
                            </h2>
                        </div>

                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-lg font-semibold text-(--secondary-color)">
                                Obregon Insurance — Miami
                            </h3>

                            <div className="mt-4 space-y-3">

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <MapPinned size={16} className="mt-0.5 shrink-0" />
                                    <span>1740 SW 57 Ave, Miami, FL 33155</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Clock8 size={16} className="mt-0.5 shrink-0" />
                                    <span>Mon - Thur 9:30 AM - 5:30 PM</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Clock8 size={16} className="mt-0.5 shrink-0" />
                                    <span>Fridays 9:30 - 5:00 PM</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Smartphone size={16} className="mt-0.5 shrink-0" />
                                    <span>(305) 265-6226</span>
                                </p>
                            </div>

                            <button className="w-full mt-5 bg-[#0077a6] hover:bg-[#00658d] text-white rounded-full py-2 text-sm font-medium transition">
                                Get Direction
                            </button>
                        </div>

                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-lg font-semibold text-(--secondary-color)">
                                Obregon Insurance — Miami
                            </h3>

                            <div className="mt-4 space-y-3">

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <MapPinned size={16} className="mt-0.5 shrink-0" />
                                    <span>7875 Bird Road Suite 211 Miami, FL 33155</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Clock8 size={16} className="mt-0.5 shrink-0" />
                                    <span>Mon - Thur 9:30 AM - 5:30 PM</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Clock8 size={16} className="mt-0.5 shrink-0" />
                                    <span>Friday 9:30 - 5:00 PM</span>
                                </p>

                                <p className="flex gap-2 text-sm text-gray-600">
                                    <Smartphone size={16} className="mt-0.5 shrink-0" />
                                    <span>(305) 265-6226</span>
                                </p>
                            </div>

                            <button className="w-full mt-5 bg-[#0077a6] hover:bg-[#00658d] text-white rounded-full py-2 text-sm font-medium transition">
                                Get Direction
                            </button>
                        </div>
                    </div>

                    {/* MAP */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white h-140 relative">

                        {!mapLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                        )}

                        <iframe
                            title="Store Location Map"
                            src="https://www.google.com/maps?q=Miami,Florida&output=embed"
                            className="w-full h-140  border-0"
                            loading="lazy"
                            onLoad={() => setMapLoaded(true)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreLocations;