"use client";

import { motion } from "framer-motion";

const textReveal = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default function HeroMotion({ videoUrl, children }) {
    return (
        <>
            {/* VIDEO */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[620px] h-[620px] 
                   -translate-x-1/2 -translate-y-1/2 
                   rounded-xl overflow-hidden z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, x: "20vw" }}
                transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <video
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </motion.div>

            {/* CONTENT */}
            <motion.div
                variants={textReveal}
                initial="hidden"
                animate="show"
            >
                {children}
            </motion.div>
        </>
    );
}
