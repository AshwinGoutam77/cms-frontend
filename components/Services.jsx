"use client";

import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedLines from "./AnimatedLines";

export default function Services() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const SERVICES = [
        {
            title: "Artificial Intelligence",
            desc: "Advanced Analytics & AI improve problem-solving, uncover insights, and drive smarter strategies. From predictive forecasting and supply chain optimization to AI-powered automation, our solutions turn complex data into real business results.",
            icon: "https://kpidigital.com/wp-content/uploads/2025/03/Artificial-Intelligence.png",
        },
        {
            title: "Digital Transformation",
            desc: "Digital transformation goes beyond technology—it’s about rethinking how your business operates, innovates, and delivers value. We help organizations leverage AI, streamline workflows, and turn data into a strategic asset that drive efficiency, automation, and long-term growth.",
            icon: "https://kpidigital.com/wp-content/uploads/2023/02/Strategy-Icon.svg",
        },
        {
            title: "Data Management",
            desc: "Effective data management turns fragmented information into a unified, reliable resource for better decisions. We design flexible architectures, centralize access, and use AI automation to streamline operations, ensure compliance, and support innovation.",
            icon: "https://kpidigital.com/wp-content/uploads/2025/03/Data-Management.png",
        },
        {
            title: "Business Intelligence",
            desc: "Our BI solutions turn raw data into insights with AI-powered analytics, revealing patterns, reducing risks, and identifying opportunities. With dynamic dashboards, real-time reporting, and mobile access, you can track performance, collaborate, and make confident decisions anytime, anywhere.",
            icon: "https://kpidigital.com/wp-content/uploads/2023/01/Alignment-Icon.svg",
        },
        {
            title: "Cloud Modernization",
            desc: "Cloud modernization is about more than technology—it’s about agility, efficiency, and scalability. KPI Digital designs tailored solutions with AI automation to streamline migration, enhance security, and optimize costs for a seamless transformation.",
            icon: "https://kpidigital.com/wp-content/uploads/2025/03/CloudModernization.png",
        },
    ];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // 🔥 MAP SCROLL → INDEX
    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const segment = 1 / SERVICES.length;
        const index = Math.min(
            SERVICES.length - 1,
            Math.floor((v + segment / 2) / segment)
        );

        setActiveIndex((prev) => (prev !== index ? index : prev));
    });


    const active = SERVICES[activeIndex];

    return (
        <section ref={sectionRef} className="relative h-[600vh]">
            {/* STICKY CONTENT */}
            <div className="sticky top-0 h-screen flex items-center">
                <div className="container max-w-6xl mx-auto grid grid-cols-2 gap-40">

                    <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        {SERVICES.map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-10 rounded-full"
                                animate={{
                                    backgroundColor:
                                        i === activeIndex
                                            ? "rgb(34,211,238)" // cyan-400
                                            : "rgba(255,255,255,0.2)",
                                    scale: i === activeIndex ? 1.1 : 1,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </div>


                    {/* LEFT ICON */}
                    <div className="flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={active.icon}
                                src={active.icon}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-[300px] h-auto"
                            />
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-center gap-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col justify-center gap-6"
                            >
                                <h4 className="text-white text-[50px] font-bold">
                                    {active.title}
                                </h4>

                                <p className="text-white text-[22px] leading-relaxed">
                                    {active.desc}
                                </p>

                                <button className="secondary-btn w-fit">
                                    Learn More
                                </button>
                            </motion.div>

                        </AnimatePresence>
                    </div>


                </div>
            </div>
        </section>
    );
}
