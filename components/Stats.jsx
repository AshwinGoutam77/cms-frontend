'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

function StatCounter({ value, label }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref}>
            <h3 className="text-[55px] font-[500]">
                {isInView && <CountUp end={value} duration={2} />}{" "}
                <span className="color-text font-[600]">+</span>
            </h3>
            <p className="text-[18px]">{label}</p>
        </div>
    );
}


export default function Stats() {
    const slides = [
        {
            title: "Enhancing the customer experience with a new digital presence",
            image:
                "https://kpidigital.com/wp-content/uploads/2025/03/KPIDigital-ClientStory-Harnessing-the-power-of-data-to-create-a-brighter-future-for-Canadian-Dairy-Farming.jpg",
        },
        {
            title: "Accelerating manufacturing operations with AI",
            image:
                "https://kpidigital.com/wp-content/uploads/2025/03/KPIDigital-ClientStory-Revolutionizing-Medical-Distribution-A-Digital-Transformation-Journey.jpg",
        },
        {
            title: "Boosting retail performance through analytics",
            image:
                "https://kpidigital.com/wp-content/uploads/2025/03/KPIDigital-ClientStory-Enhancing-the-customer-experience-with-a-new-digital-presence.jpg",
        },
    ];

    return (
        <>
            {/* ---------------- STATS SECTION ---------------- */}
            <motion.section
                className="container mx-auto text-white mb-40 border-b border-[#ccc9] pb-20"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2 variants={fadeUp} className="text-[40px] text-center font-bold">
                    The proof is in our numbers
                </motion.h2>

                <motion.p variants={fadeUp} className="text-[18px] text-center mt-3">
                    We’ve earned our reputation through years of experience and hundreds of satisfied clients.
                </motion.p>

                <motion.div
                    className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-10"
                    variants={stagger}
                >
                    {[
                        { value: 15, label: "Years Experience" },
                        { value: 500, label: "Projects Delivered" },
                        { value: 200, label: "Satisfied Clients" },
                        { value: 25, label: "Industries Supported" },
                    ].map((item, i) => (
                        <motion.div key={i} variants={fadeUp}>
                            <motion.div variants={fadeUp}>
                                <StatCounter value={item.value} label={item.label} className='font-bold'/>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} className="text-center mt-5">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="secondary-btn"
                    >
                        More About Us
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* ---------------- CONTENT SPLIT SECTION ---------------- */}
            <motion.section
                className="container mx-auto max-w-6xl text-white mb-40"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="flex justify-between gap-20">
                    <motion.h2 variants={fadeUp} className="text-[40px]">
                        Helping our clients achieve
                        <span className="block">tangible results</span>
                    </motion.h2>

                    <motion.div variants={fadeUp} className="w-[50%]">
                        <p className="text-[18px]">
                            We’re more than just consultants—we’re your partners in transformation.
                            We combine strategy, technology, and execution to accelerate your vision.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="secondary-btn mt-8"
                        >
                            View All Customer Stories
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* ---------------- SLIDER SECTION ---------------- */}
            <section className="relative py-24">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1.2}
                    centeredSlides
                    initialSlide={1}
                    spaceBetween={40}
                    pagination={{ clickable: true }}
                    breakpoints={{ 1024: { slidesPerView: 1.5 } }}
                    className="case-study-slider"
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative h-[520px] rounded-xl overflow-hidden"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />

                                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-10">
                                    <h3 className="text-white text-3xl md:text-4xl font-semibold max-w-3xl leading-tight">
                                        {slide.title}
                                    </h3>
                                    <a href="#" className="mt-8 text-sm font-medium">
                                        Read the case study →
                                    </a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* ---------------- CTA SECTION ---------------- */}
            <motion.section
                className="
          bg-[url('https://kpidigital.com/wp-content/uploads/2023/01/Group-13886-1.png')]
          bg-cover bg-no-repeat py-20 pt-0
        "
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center text-white">
                    <h2 className="text-[35px] font-bold mb-10">
                        Your transformation journey starts now.
                        <span className="block font-normal">Are you ready?</span>
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="primary-btn text-lg py-4"
                    >
                        Talk to an expert
                    </motion.button>
                </div>
            </motion.section>
        </>
    );
}
