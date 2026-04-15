import { MapPinned, Search, Clock8 } from "lucide-react";
import Button from "./PrimaryBtn";
import { useState } from "react";

const StoreLocations = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
    return (
        <section className="px-4 py-12">
            <div className="max-w-4xl mx-auto">

                {/* Search */}
                <div className="flex w-80 mx-auto items-center border border-gray-300 rounded-lg px-3 py-2 mb-6 bg-gray-50">
                    <Search size={16} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Miami Florida"
                        className="w-80 bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden mb-6 relative">

                    {/* Skeleton */}
                    {!mapLoaded && (
                        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
                    )}

                    {/* Map */}
                    <iframe
                        title="Store Location Map"
                        src="https://www.google.com/maps?q=Miami,Florida&output=embed"
                        className="w-full h-64 md:h-80 border-0"
                        loading="lazy"
                        onLoad={() => setMapLoaded(true)}
                    ></iframe>

                </div>

                <section className="max-w-6xl mx-auto py-8">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <p className="text-lg text-gray-500">
                            Our Offices
                        </p>
                        <h2 className="primary-heading mt-2">
                            All Locations
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6">

                        {/* Card 1 */}
                        <div className="w-full border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center">
                            <div>
                                <p className="text-lg text-center font-semibold text-(--secondary-color)">
                                    Obregon Insurance Miami
                                </p>

                                <div className="flex flex-col items-center justify-center gap-3 mt-4">
                                    <p className="flex gap-2 items-center text-center text-sm text-gray-500">
                                        <MapPinned size={18} />
                                        <span>1740 SW 57 Ave, Miami, FL 33155</span>
                                    </p>

                                    <p className="flex gap-2 items-center text-center text-sm text-gray-500">
                                        <Clock8 size={18} />
                                        <span>Mon-Fri 9:00 AM – 5:00 PM</span>
                                    </p>
                                </div>
                            </div>

                            <Button className="w-full mt-6" text="Directions" />
                        </div>

                        {/* Card 2 */}
                        <div className="w-full border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center">
                            <div>
                                <p className="text-lg font-semibold text-center text-(--secondary-color)">
                                    Obregon Insurance Miami
                                </p>

                                <div className="flex flex-col items-center justify-center gap-3 mt-4">
                                    <p className="flex gap-2 items-start text-sm text-gray-500">
                                        <MapPinned size={18} />
                                        <span>7875 Bird Road Suite 211 Miami, FL 33155</span>
                                    </p>

                                    <p className="flex gap-2 items-start text-sm text-gray-500">
                                        <Clock8 size={18} />
                                        <span>Mon-Fri 9:00 AM – 5:00 PM</span>
                                    </p>
                                </div>
                            </div>

                            <Button className="w-full mt-6" text="Directions" />
                        </div>

                    </div>

                </section>
            </div>
        </section>
    );
};

export default StoreLocations;