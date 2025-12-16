const caseStudies = [
    {
        industry: "Healthcare",
        title: "Improving Patient Outcomes with AI-Driven Analytics",
        result: "30% improvement in operational efficiency",
    },
    {
        industry: "Retail",
        title: "Data-Powered Customer Personalization Platform",
        result: "25% increase in customer engagement",
    },
    {
        industry: "Finance",
        title: "Enterprise Data Modernization on Cloud",
        result: "40% reduction in infrastructure costs",
    },
];

export default function CaseStudies() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Client Success Stories
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-xl">
                            Real-world outcomes delivered through data, analytics, and AI-driven solutions.
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
                        View All Case Studies
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {caseStudies.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl overflow-hidden hover:shadow-xl transition"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gray-200" />

                            <div className="p-6">
                                <span className="text-sm text-blue-600 font-semibold">
                                    {item.industry}
                                </span>

                                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    {item.result}
                                </p>

                                <div className="mt-6">
                                    <span className="text-blue-600 font-medium cursor-pointer">
                                        Read Case Study →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
