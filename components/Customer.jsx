"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const useCases = [
    {
        title: "Transportation & Logistics Inventory Optimization",
        desc:
            "Optimize inventory management by predicting demand fluctuations, reducing stock imbalances, and improving procurement efficiency. Enhanced supply chain visibility minimizes holding costs, maximizes resource utilization, and ensures seamless movement of goods across distribution networks.",
        image:
            "https://kpidigital.com/wp-content/uploads/2025/03/UseCase-InventoryOptimization.png",
    },
    {
        title: "Demand Forecasting",
        desc:
            "Demand forecasting models analyze historical trends, real-time market data, and external factors to predict future demand with accuracy. By optimizing inventory levels, refining production schedules, and reducing supply chain disruptions, businesses can minimize waste, prevent stock shortages or overages, and adapt more effectively to shifting market conditions.",
        image:
            "https://kpidigital.com/wp-content/uploads/2025/03/UseCase-DemandForecasting.png",
    },
    {
        title: "Predictive Sales Forecasting",
        desc:
            "AI-powered models analyze sales data, customer behavior, and market trends to forecast revenue with precision. By identifying patterns and seasonal shifts, businesses can refine pricing, allocate resources, and prioritize high-value opportunities, reducing lost sales and improving forecast accuracy.",
        image:
            "https://kpidigital.com/wp-content/uploads/2025/03/UseCase-Predictive-Analytics.png",
    },
    {
        title: "Inventory Optimization",
        desc:
            "Analyze demand patterns, supply chain variables, and stock levels to maintain optimal inventory balance. By predicting fluctuations, reducing stockouts, and minimizing excess inventory, businesses can improve fulfillment speed, lower carrying costs, and enhance overall operational efficiency.",
        image:
            "https://kpidigital.com/wp-content/uploads/2025/03/UseCase-InventoryOptimization-1.png",
    },
];

export default function UseCasesSlider() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section
                className="
                    relative
                    bg-[url('https://kpidigital.com/wp-content/uploads/2023/01/Glow-Homepage.jpg')]
                    bg-cover bg-center bg-no-repeat
                    pt-50 pb-16
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 40, delay: 1 }}
                    animate={{ opacity: 1, y: 0, delay: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="max-w-5xl mx-auto px-6 text-center text-white"
                >
                    <h2 className="text-[40px] font-semibold">
                        See how we drive value for our customers
                    </h2>

                    <p className="text-[18px] mt-6 opacity-90 leading-relaxed">
                        Explore use cases where data, analytics, and AI come together to solve
                        real business challenges.
                        <span className="block">
                            Adapt to change and deliver measurable impact.
                        </span>
                    </p>
                </motion.div>
            </section>

            {/* ================= SLIDER ================= */}
            <section className="py-24 pt-0 max-w-7xl mx-auto px-6">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="usecase-swiper"
                >
                    {useCases.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="
                  bg-white rounded-xl overflow-hidden
                  shadow-lg hover:shadow-2xl
                  transition-shadow
                  h-full min-h-[520px]
                "
                            >
                                {/* Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[220px] object-cover"
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-xl font-semibold text-black mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ================= CTA ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-white font-medium
              shadow-lg
            "
                    >
                        Browse All Use Cases
                    </motion.button>
                </motion.div>
            </section>
        </>
    );
}
