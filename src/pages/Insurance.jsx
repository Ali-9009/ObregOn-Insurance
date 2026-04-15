import CoverageSection from "../components/CoverageSection";

function Insurance() {
    return (
        <>
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">

                    <h2 className="text-[30px] md:text-[45px] font-bold leading-tight mt-3">
                        Insurance
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Your safety is our priority. We offer simple, flexible, and dependable insurance plans to your needs.
                    </p>
                </div>
            </section>

          <CoverageSection />

        </>
    );
}

export default Insurance;