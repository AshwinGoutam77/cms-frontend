"use client";

import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";

const textFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const logoContainer = {
    show: { transition: { staggerChildren: 0.12 } },
};

const logoItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function PartnersMotion({
    introText,
    logos,
    heading,
    description,
    type = "top",
}) {
    if (type === "bottom") {
        return (
            <>
                <motion.h2
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-white text-[40px] text-center mt-20"
                >
                    {heading}
                </motion.h2>

                <motion.p
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-white text-[22px] text-center mt-10"
                >
                    {description}
                </motion.p>
            </>
        );
    }

    return (
        <>
            <motion.p
                variants={textFadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-white text-[22px] mb-8 px-0 mx-0"
            >
                {introText}
            </motion.p>

            <motion.div
                variants={logoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-6 gap-x-20 gap-y-10 items-center mt-16 px-4"
            >
                {logos?.map((logo) => {
                    if (!logo.image) return null;
                    const imageUrl = urlFor(logo.image).width(300).url();

                    return (
                        <motion.div
                            key={logo.id}
                            variants={logoItem}
                            className="flex items-center justify-center h-[48px]"
                        >
                            <img
                                src={imageUrl}
                                alt={logo.alt || "partner"}
                                className="max-h-full max-w-[170px] object-contain opacity-90"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
}
