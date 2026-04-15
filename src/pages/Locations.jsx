import Button from "../components/PrimaryBtn";
import StoreLocations from "../components/StoreLocations";


function Locations() {
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

        </>
    );
}

export default Locations;