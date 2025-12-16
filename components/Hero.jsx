"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

/* ------------------ ANIMATIONS ------------------ */

const videoCenterIntro = {
    hidden: {
        opacity: 0,
        scale: 0.75,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const videoMoveToRight = {
    show: {
        x: "20vw", // slide to right side of screen
        transition: {
            delay: 1.1,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

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

const buttonReveal = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.6,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/* ------------------ COMPONENT ------------------ */

export default function Hero() {
    return (
        <section className="relative mx-auto min-h-screen overflow-hidden bg-[#071a2b]">

            {/* VIDEO: START CENTER, MOVE RIGHT */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-0"
                initial={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
                animate={{ opacity: 1, scale: 1, x: "20vw" }} // move right inside hero
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
            >
                <video
                    className="w-full h-full object-cover"
                    src="https://kpidigital.com/wp-content/uploads/2023/01/video_3_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </motion.div>

            {/* PAGE CONTENT */}
            <div className="container mx-auto px-6 py-32 min-h-screen flex items-center relative z-10">
                <div className="grid lg:grid-cols-2 items-center w-full">

                    {/* LEFT TEXT */}
                    <motion.div
                        variants={textReveal}
                        initial="hidden"
                        animate="show"
                        className="max-w-xl"
                    >
                        <h1 className="text-5xl xl:text-[60px] font-bold leading-[68px] bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#0066ff] bg-clip-text text-transparent">
                            Uncover the potential of data and AI to solve business challenges and
                            drive measurable results
                        </h1>

                        <p className="mt-6 text-lg text-white/80">
                            Whether you are looking to expand into new markets, be more competitive,
                            reduce costs or drive sales, we help you drive innovation using the
                            latest technology in Data and AI.
                        </p>

                        <motion.div
                            variants={buttonReveal}
                            initial="hidden"
                            animate="show"
                            className="mt-10"
                        >
                            <Button className="primary-btn">Lets Talk</Button>
                        </motion.div>
                    </motion.div>

                    <div />
                </div>
            </div>
        </section>

    );
}
