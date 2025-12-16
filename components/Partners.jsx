"use client";

import { delay, motion } from "framer-motion";

const textFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const logoContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const logoItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Partners() {
    return (
        <>
            <section className="container mx-auto border-b border-[#ccc9] pb-20">
                <div className="px-6">

                    <motion.p
                        variants={textFadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-white text-[22px] mb-8"
                    >
                        We partner with the world’s leading technology companies
                    </motion.p>

                    <motion.div
                        variants={logoContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-7 gap-x-20 gap-y-10 items-center mt-16"
                    >
                        {[
                            "https://kpidigital.com/wp-content/uploads/2023/01/Microsoft-2.svg",
                            "https://kpidigital.com/wp-content/uploads/2023/01/IBM-2.svg",
                            "https://kpidigital.com/wp-content/uploads/2023/01/aws-2.png",
                            "https://kpidigital.com/wp-content/uploads/2023/01/google-1.png",
                            "https://kpidigital.com/wp-content/uploads/2025/03/Tecsys-Logo.png",
                            "https://kpidigital.com/wp-content/uploads/2025/03/Databricks-Logo.png",
                            "https://kpidigital.com/wp-content/uploads/2025/03/Snowflake-Logo.png"
                        ].map((logo) => (
                            <motion.div
                                key={logo}
                                variants={logoItem}
                                className="flex items-center justify-center h-[48px]"
                            >
                                <img
                                    src={logo}
                                    alt=""
                                    className="max-h-full max-w-[170px] object-contain opacity-90"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="container max-w-6xl mx-auto">
                <motion.h2
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-white text-[40px] text-center mt-20"
                >
                    We develop a data and AI strategy aligned with your business goals,
                    transforming your data into insights that drive intelligent decisions
                    and meaningful actions
                </motion.h2>

                <motion.p
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-white text-[22px] text-center mt-10"
                >
                    We leverage data, analytics and AI to solve your business challenges across the entire supply chain.
                    Regardless of your level of digital maturity and where you stand in your AI journey,
                    see what our strategies and services can do for you.
                </motion.p>
            </section>
        </>
    );
}
