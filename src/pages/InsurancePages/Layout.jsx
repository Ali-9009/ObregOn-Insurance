// components/InsurancePage.jsx
import FAQ from "../../components/Faqs";

export default function Layout({
    title,
    subtitle,
    overview,
    overviewImg,
    coverTitle,
    coverImg,
    coverList,
    whyData,
}) {
    return (
        <>
            {/* Hero */}
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-[30px] md:text-[45px] font-bold mt-3">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">{subtitle}</p>
                </div>
            </section>

            {/* Overview */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="primary-heading">{overview.title}</h2>
                        <p className="mt-4 text-lg">{overview.text}</p>
                    </div>

                    <img src={overviewImg} alt="" />
                </div>
            </section>

            {/* Covers */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <img src={coverImg} alt="" />

                    <div>
                        <h2 className="primary-heading">{coverTitle}</h2>

                        <ul className="list-disc pl-5 mt-6 space-y-2">
                            {coverList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="bg-blue-50 py-12 px-6">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="primary-heading">
                        Why choose Obregon Insurance
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {whyData.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <img src="/assets/c-i.png" className="w-10 mb-4" />
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FAQ />
        </>
    );
}