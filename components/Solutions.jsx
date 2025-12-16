const solutions = [
    {
        title: "AI & Advanced Analytics",
        desc: "Leverage artificial intelligence and predictive analytics to drive smarter business decisions.",
    },
    {
        title: "Data Engineering",
        desc: "Build scalable, secure, and high-performance data platforms for enterprise needs.",
    },
    {
        title: "Cloud Transformation",
        desc: "Modernize legacy systems with cloud-native architectures and migration strategies.",
    },
    {
        title: "Business Intelligence",
        desc: "Transform raw data into actionable insights using modern BI platforms.",
    },
    {
        title: "Data Governance",
        desc: "Ensure compliance, security, and trust with strong governance frameworks.",
    },
    {
        title: "Industry Solutions",
        desc: "Tailored data solutions for healthcare, retail, finance, and manufacturing.",
    },
];

export default function Solutions() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Solutions Built for Enterprise Scale
                    </h2>
                    <p className="mt-4 text-gray-600">
                        KPI Digital delivers end-to-end data and analytics solutions
                        designed to accelerate digital transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="mt-6">
                                <span className="text-blue-600 font-medium cursor-pointer">
                                    Learn More →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
